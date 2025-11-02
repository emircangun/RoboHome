import * as THREE from 'three';
import { loadGaussianSplatPLY, GsplatSetup } from '../utils/gaussianSplatLoader';
import { Table } from '../objects/Table';
import { TableConfig, RoomScene } from '../types';

export class SceneManager {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private roomScene: RoomScene;
  private selectedTable: Table | null = null;
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private gsplatSetup: GsplatSetup | null = null;

  constructor(container: HTMLElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000); // Black background for 3D window

    // Get container dimensions - handle case where container might not have explicit width/height yet
    const width = container.clientWidth || window.innerWidth - 450; // 80px menu + 350px content + 20px margin
    const height = container.clientHeight || window.innerHeight - 80; // 60px top bar + 20px margin
    
    // Camera setup
    const aspect = width / height;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    this.camera.position.set(5, 5, 5);
    this.camera.lookAt(0, 0, 0);

    // Renderer setup - optimized for Gaussian Splat performance
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: false, // Disable for better performance (splats handle their own anti-aliasing)
      alpha: true,
      premultipliedAlpha: false,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    // Disable shadows for Gaussian Splats (they don't need it and it's expensive)
    this.renderer.shadowMap.enabled = false;
    // Set clear color to black for the 3D window
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.sortObjects = true; // Important for proper alpha sorting
    container.appendChild(this.renderer.domElement);

    // Raycasting for selection
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // Room scene
    this.roomScene = {
      tables: new Map()
    };

    // Setup lighting
    this.setupLighting();

    // Setup grid helper
    this.setupHelpers();

    // Event listeners
    this.setupEventListeners();

    // Start render loop
    this.animate();
  }

  private setupLighting(): void {
    // Minimal lighting for Gaussian Splats (they have baked-in lighting)
    // Just ambient light is sufficient
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    this.scene.add(ambientLight);
    
    // Note: Gaussian Splats don't need complex lighting - they store color per splat
  }

  private setupHelpers(): void {
    // Grid helper with darker colors for dark background
    const gridHelper = new THREE.GridHelper(20, 20, 0x333333, 0x444444);
    this.scene.add(gridHelper);
    
    // Axes helper removed
  }

  private setupEventListeners(): void {
    window.addEventListener('resize', () => this.onWindowResize());
    
    // Listen for window resize events from WindowResizeManager
    window.addEventListener('windowResize', () => {
      this.onWindowResize();
    });
    
    this.renderer.domElement.addEventListener('click', (event) => {
      this.onMouseClick(event);
    });
  }

  private onWindowResize(): void {
    const container = this.renderer.domElement.parentElement;
    if (!container) return;

    // Get the actual container dimensions (which now use left/right/bottom positioning)
    const width = container.clientWidth || window.innerWidth - 450; // 80px menu + 350px content + 20px margin
    const height = container.clientHeight || window.innerHeight - 80; // 60px top bar + 20px margin

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    
    // Update gsplat renderer and camera if available
    if (this.gsplatSetup) {
      this.gsplatSetup.gsplatCanvas.width = width;
      this.gsplatSetup.gsplatCanvas.height = height;
      this.gsplatSetup.gsplatRenderer.setSize(width, height);
      this.gsplatSetup.gsplatCamera.data.setSize(width, height);
      
      // Zoom is maintained via camera position adjustments
    }
  }

  private onMouseClick(event: MouseEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    // Deselect previous table
    if (this.selectedTable) {
      this.selectedTable.setSelected(false);
      this.selectedTable = null;
    }

    // Check for table intersections
    const tables = Array.from(this.roomScene.tables.values());
    const intersects = this.raycaster.intersectObjects(tables, true);

    if (intersects.length > 0) {
      // Find the table group
      let tableGroup: Table | null = null;
      for (const table of tables) {
        const intersected = intersects[0].object;
        if (table === intersected || (intersected.parent && intersected.parent === table)) {
          tableGroup = table as Table;
          break;
        }
      }

      if (tableGroup) {
        this.selectedTable = tableGroup;
        this.selectedTable.setSelected(true);
        this.dispatchTableSelectedEvent(tableGroup);
      }
    }
  }

  private dispatchTableSelectedEvent(table: Table): void {
    const event = new CustomEvent('tableSelected', { detail: table.getConfig() });
    window.dispatchEvent(event);
  }

  public async loadRoom(plyFilePathOrFile: string | File): Promise<void> {
    try {
      // Dispose existing gsplat setup if any
      if (this.gsplatSetup) {
        // Clean up previous setup
        this.gsplatSetup.gsplatControls.dispose();
        this.gsplatSetup.gsplatRenderer.dispose();
        // Remove canvas from DOM
        if (this.gsplatSetup.gsplatCanvas.parentElement) {
          this.gsplatSetup.gsplatCanvas.parentElement.removeChild(this.gsplatSetup.gsplatCanvas);
        }
      }

      // Load the PLY file using gsplat library
      // This provides proper first-person view rendering
      const container = this.renderer.domElement.parentElement || document.body;
      const gsplatSetup = await loadGaussianSplatPLY(plyFilePathOrFile, container);

      this.gsplatSetup = gsplatSetup;
      this.roomScene.gsplatSetup = gsplatSetup;

      // Update renderer size if needed
      if (container) {
        gsplatSetup.gsplatCanvas.width = container.clientWidth;
        gsplatSetup.gsplatCanvas.height = container.clientHeight;
        gsplatSetup.gsplatRenderer.setSize(container.clientWidth, container.clientHeight);
        gsplatSetup.gsplatCamera.data.setSize(container.clientWidth, container.clientHeight);
      }

      // Adjust camera position based on splat bounds
      setTimeout(async () => {
        const bounds = gsplatSetup.splat.bounds;
        if (bounds) {
          // Import Vector3 from gsplat
          const { Vector3 } = await import('gsplat');
          
          // Calculate center and size from bounds
          const center = {
            x: (bounds.min.x + bounds.max.x) / 2,
            y: (bounds.min.y + bounds.max.y) / 2,
            z: (bounds.min.z + bounds.max.z) / 2
          };
          
          const size = {
            x: bounds.max.x - bounds.min.x,
            y: bounds.max.y - bounds.min.y,
            z: bounds.max.z - bounds.min.z
          };
          
          const maxDim = Math.max(size.x, size.y, size.z);
          
          // Set initial camera position for first-person view (zoomed in closer)
          // Position camera much closer to the front on X axis
          const zoomFactor = (gsplatSetup.gsplatCamera as any)._zoomFactor || 100;
          const distanceMultiplier = 1.0 / zoomFactor; // Closer = more zoom
          // Move camera much further forward on X axis (positive X direction typically)
          // Using a large offset to position camera well in front of the scene
          const xForwardOffset = maxDim * 0.4; // Move significantly forward on X axis
          const xPosition = center.x - xForwardOffset; // Position camera in front of scene center
          gsplatSetup.gsplatCamera.position = new Vector3(
            xPosition, // Much closer/forward on X axis
            center.y + maxDim * 0.1, 
            center.z + maxDim * 0.2 * distanceMultiplier
          );
        }
      }, 500);
    } catch (error) {
      console.error('Error loading PLY file with gsplat:', error);
      throw error;
    }
  }

  public addTable(config: TableConfig): Table {
    const table = new Table(config);
    this.roomScene.tables.set(config.id, table);
    this.scene.add(table);
    return table;
  }

  public removeTable(tableId: string): boolean {
    const table = this.roomScene.tables.get(tableId);
    if (table) {
      this.scene.remove(table);
      this.roomScene.tables.delete(tableId);
      
      if (this.selectedTable === table) {
        this.selectedTable = null;
      }
      return true;
    }
    return false;
  }

  public updateTable(tableId: string, config: Partial<TableConfig>): boolean {
    const table = this.roomScene.tables.get(tableId);
    if (table) {
      table.updateConfig(config);
      return true;
    }
    return false;
  }

  public getTable(tableId: string): Table | undefined {
    return this.roomScene.tables.get(tableId);
  }

  public getAllTables(): Table[] {
    return Array.from(this.roomScene.tables.values());
  }

  public getSelectedTable(): Table | null {
    return this.selectedTable;
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    
    // If gsplat is active, use gsplat rendering exclusively for proper first-person view
    if (this.gsplatSetup) {
      // Apply custom drag-to-rotate rotation (supports full 360-degree rotation)
      const camera = this.gsplatSetup.gsplatCamera;
      
      if ((camera as any)._forward && (camera as any)._up) {
        // Apply stored rotation to enable 360-degree horizontal rotation
        try {
          // Try to set view matrix directly
          if (camera.data && (camera.data as any).setViewMatrix) {
            (camera.data as any).setViewMatrix(
              camera.position, 
              (camera as any)._forward, 
              (camera as any)._up
            );
          } else if (camera.data && (camera.data as any).rotation) {
            // Alternative: Set rotation angles if camera supports Euler angles
            const rot = (camera.data as any).rotation;
            if (rot) {
              rot.y = (camera as any)._rotationYaw ?? rot.y;
              rot.x = (camera as any)._rotationPitch ?? rot.x;
            }
          }
        } catch (err) {
          // Continue if rotation application fails - FPSControls will handle it
          console.debug('Custom rotation application:', err);
        }
      }
      
      // Update controls (movement) but our custom rotation takes precedence
      this.gsplatSetup.gsplatControls.update();
      this.gsplatSetup.gsplatRenderer.render(this.gsplatSetup.gsplatScene, this.gsplatSetup.gsplatCamera);
    } else {
      // Otherwise, use Three.js rendering for tables and other objects
      this.camera.updateMatrixWorld();
      this.renderer.render(this.scene, this.camera);
    }
  }

  public dispose(): void {
    if (this.gsplatSetup) {
      this.gsplatSetup.gsplatControls.dispose();
      this.gsplatSetup.gsplatRenderer.dispose();
      // Remove canvas from DOM
      if (this.gsplatSetup.gsplatCanvas.parentElement) {
        this.gsplatSetup.gsplatCanvas.parentElement.removeChild(this.gsplatSetup.gsplatCanvas);
      }
    }
    this.renderer.dispose();
    window.removeEventListener('resize', () => this.onWindowResize());
  }
}

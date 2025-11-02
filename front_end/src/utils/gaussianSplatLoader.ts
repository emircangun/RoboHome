import { PLYLoader, Scene, Splat, WebGLRenderer, Camera, FPSControls, Vector3, Color32 } from 'gsplat';

// Interface for gsplat rendering setup
export interface GsplatSetup {
  gsplatScene: Scene;
  gsplatRenderer: WebGLRenderer;
  gsplatCamera: Camera;
  gsplatControls: FPSControls;
  gsplatCanvas: HTMLCanvasElement;
  splat: Splat;
}

/**
 * Load PLY file using gsplat library and return gsplat objects
 * This provides proper first-person view rendering for Gaussian Splats
 */
export async function loadGaussianSplatPLY(
  urlOrFile: string | File, 
  container: HTMLElement
): Promise<GsplatSetup> {
  try {
    // Create gsplat scene
    const gsplatScene = new Scene();
    
    // Create a new canvas for gsplat (can't share WebGL context with Three.js)
    // This canvas will overlay the Three.js canvas
    const gsplatCanvas = document.createElement('canvas');
    gsplatCanvas.style.position = 'absolute';
    gsplatCanvas.style.top = '0';
    gsplatCanvas.style.left = '0';
    gsplatCanvas.style.width = '100%';
    gsplatCanvas.style.height = '100%';
    gsplatCanvas.style.pointerEvents = 'auto';
    gsplatCanvas.width = container.clientWidth || 800;
    gsplatCanvas.height = container.clientHeight || 600;
    container.appendChild(gsplatCanvas);
    
    // Create gsplat renderer with its own canvas
    const gsplatRenderer = new WebGLRenderer(gsplatCanvas);
    // Set black background color for the 3D window
    const bgColor = new Color32(0, 0, 0, 255);
    gsplatRenderer.backgroundColor = bgColor;
    
    // Create gsplat camera with perspective projection
    const gsplatCamera = new Camera();
    // Set camera size (this will set up the projection)
    gsplatCamera.data.setSize(gsplatCanvas.width, gsplatCanvas.height);
    gsplatCamera.data.near = 0.1;
    gsplatCamera.data.far = 1000;
    
    // Zoom in the first-person view by adjusting the camera's focal length
    // This will be applied by moving camera closer initially and adjusting rendering scale
    // Store zoom factor for later use
    (gsplatCamera as any)._zoomFactor = 1.5; // 1.5x zoom (50% closer view)
    
    // Create FPS controls for first-person navigation with full 360-degree rotation
    const gsplatControls = new FPSControls(gsplatCamera, gsplatCanvas);
    gsplatControls.moveSpeed = 5.0;
    gsplatControls.lookSpeed = 0.005; // Mouse look sensitivity - allows full 360-degree rotation around axis
    
    // Disable pointer lock - we don't want the mouse to be captured
    // Prevent FPSControls from requesting pointer lock
    gsplatCanvas.requestPointerLock = () => {
      // Do nothing - prevent pointer lock
      return Promise.resolve();
    };
    
    // Exit pointer lock if it's already active
    if (document.pointerLockElement === gsplatCanvas) {
      document.exitPointerLock();
    }
    
    // Add listener to prevent pointer lock requests
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement === gsplatCanvas) {
        // Immediately exit if pointer lock is somehow activated
        document.exitPointerLock();
      }
    });
    
    // FPSControls from gsplat automatically supports:
    // - Full 360-degree horizontal rotation (yaw) - unlimited
    // - Vertical rotation (pitch) - typically limited to prevent flipping
    // - First-person movement with WASD/Arrow keys
    
    // Implement drag-to-rotate mouse look (no pointer lock needed - mouse stays visible)
    let isDragging = false;
    let isRollDragging = false; // For right-click roll rotation
    let lastMouseX = 0;
    let lastMouseY = 0;
    
    // Mouse down - start dragging
    gsplatCanvas.addEventListener('mousedown', (e) => {
      if (e.button === 0) { // Left mouse button - yaw/pitch
        isDragging = true;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        gsplatCanvas.style.cursor = 'grabbing';
        e.preventDefault();
      } else if (e.button === 2) { // Right mouse button - roll
        isRollDragging = true;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        gsplatCanvas.style.cursor = 'grabbing';
        e.preventDefault();
      }
    });
    
    // Mouse up - stop dragging
    gsplatCanvas.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        isDragging = false;
        gsplatCanvas.style.cursor = 'grab';
      } else if (e.button === 2) {
        isRollDragging = false;
        gsplatCanvas.style.cursor = 'grab';
      }
    });
    
    // Prevent context menu on right click
    gsplatCanvas.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    
    // Track camera rotation angles manually (full 360-degree horizontal rotation)
    const rotationState = {
      yaw: 0, // Horizontal rotation (around Y axis) - UNLIMITED (full 360+ degrees)
      pitch: 0, // Vertical rotation (around X axis) - limited to prevent flipping
      roll: 0, // Roll rotation (around forward axis) - UNLIMITED (full 360+ degrees)
      maxPitch: Math.PI / 2 - 0.1 // Limit vertical rotation
    };
    
    // Increase sensitivity for better control
    const rotationSensitivity = gsplatControls.lookSpeed * 150;
    
    // Mouse move - update rotation angles when dragging
    gsplatCanvas.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;
        
        if (deltaX !== 0 || deltaY !== 0) {
          // Update rotation angles
          // Horizontal: Unlimited - can rotate continuously 360 degrees
          rotationState.yaw -= deltaX * rotationSensitivity;
          // Keep yaw in reasonable range but allow full 360+ rotation
          // (No clamping needed - let it go beyond 2π for continuous rotation)
          
          // Vertical: Limited to prevent camera flipping
          rotationState.pitch = Math.max(
            -rotationState.maxPitch, 
            Math.min(rotationState.maxPitch, rotationState.pitch - deltaY * rotationSensitivity)
          );
          
          // Apply rotation to camera immediately
          updateCameraRotation(gsplatCamera, rotationState.yaw, rotationState.pitch, rotationState.roll);
        }
        
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        e.preventDefault();
      } else if (isRollDragging) {
        // Right-click drag for roll rotation
        const deltaX = e.clientX - lastMouseX;
        // Use horizontal mouse movement for roll rotation
        rotationState.roll -= deltaX * rotationSensitivity;
        
        // Apply rotation to camera immediately
        updateCameraRotation(gsplatCamera, rotationState.yaw, rotationState.pitch, rotationState.roll);
        
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        e.preventDefault();
      }
    });
    
    // Roll rotation is now handled by right-click drag (removed keyboard controls)
    
    // Helper function to update camera rotation (full 360-degree support)
    function updateCameraRotation(camera: Camera, yaw: number, pitch: number, roll: number = 0) {
      // Compute forward direction from spherical coordinates
      // This allows unlimited horizontal rotation (360+ degrees)
      const forwardX = Math.cos(pitch) * Math.sin(yaw);
      const forwardY = Math.sin(pitch);
      const forwardZ = Math.cos(pitch) * Math.cos(yaw);
      
      const forward = new Vector3(forwardX, forwardY, forwardZ).normalize();
      const worldUp = new Vector3(0, 1, 0);
      
      // Calculate right and up vectors for proper camera orientation
      // Handle edge case where forward is parallel to worldUp
      let right: Vector3;
      if (Math.abs(forward.dot(worldUp)) > 0.999) {
        // Forward is nearly parallel to world up, use a different reference
        const worldRight = new Vector3(1, 0, 0);
        right = worldRight.cross(forward).normalize();
        // Check if result is valid (not zero vector)
        const rightLen = Math.sqrt(right.x * right.x + right.y * right.y + right.z * right.z);
        if (rightLen < 0.001) {
          right = new Vector3(0, 0, 1).cross(forward).normalize();
        }
      } else {
        right = forward.cross(worldUp).normalize();
      }
      let up = right.cross(forward).normalize();
      
      // Apply roll rotation around the forward axis (always apply, even if roll is 0 for consistency)
      const rollCos = Math.cos(roll);
      const rollSin = Math.sin(roll);
      
      // Rotate the right and up vectors around the forward vector
      const rightNew = new Vector3(
        right.x * rollCos - up.x * rollSin,
        right.y * rollCos - up.y * rollSin,
        right.z * rollCos - up.z * rollSin
      ).normalize();
      
      const upNew = new Vector3(
        right.x * rollSin + up.x * rollCos,
        right.y * rollSin + up.y * rollCos,
        right.z * rollSin + up.z * rollCos
      ).normalize();
      
      right = rightNew;
      up = upNew;
      
      // Store rotation vectors to be applied in animation loop
      (camera as any)._forward = forward;
      (camera as any)._up = up;
      (camera as any)._right = right;
      (camera as any)._rotationYaw = yaw;
      (camera as any)._rotationPitch = pitch;
      (camera as any)._rotationRoll = roll;
      
      // Try to apply rotation directly if camera supports it
      if (camera.data) {
        // Try different methods to apply camera rotation
        if ((camera.data as any).setViewMatrix) {
          (camera.data as any).setViewMatrix(camera.position, forward, up);
        } else if ((camera.data as any).rotation) {
          // If camera uses Euler angles
          const rot = (camera.data as any).rotation;
          if (rot !== undefined) {
            rot.y = yaw;
            rot.x = pitch;
          }
        }
      }
    }
    
    // Mouse leave - stop dragging if mouse leaves canvas
    gsplatCanvas.addEventListener('mouseleave', () => {
      isDragging = false;
      isRollDragging = false;
      gsplatCanvas.style.cursor = 'grab';
    });
    
    // Set initial cursor style
    gsplatCanvas.style.cursor = 'grab';
    
    // Load PLY file using gsplat's PLYLoader
    // Use LoadFromFileAsync for File objects, LoadAsync for URLs
    let splat: Splat;
    if (urlOrFile instanceof File) {
      // Load from File object directly
      splat = await PLYLoader.LoadFromFileAsync(
        urlOrFile, 
        gsplatScene, 
        (progress: number) => {
          console.log(`Loading PLY: ${Math.round(progress * 100)}%`);
        }
      );
    } else {
      // Load from URL string
      splat = await PLYLoader.LoadAsync(
        urlOrFile, 
        gsplatScene, 
        (progress: number) => {
          console.log(`Loading PLY: ${Math.round(progress * 100)}%`);
        }
      );
    }
    
    // Add splat to scene
    gsplatScene.addObject(splat);
    
    // Set initial camera position (will be adjusted after bounds are calculated)
    // Start closer for a more zoomed-in view
    const zoomFactor = (gsplatCamera as any)._zoomFactor || 1.5;
    gsplatCamera.position = new Vector3(0, 0, 2 / zoomFactor);
    
    return {
      gsplatScene,
      gsplatRenderer,
      gsplatCamera,
      gsplatControls,
      gsplatCanvas,
      splat
    };
  } catch (error) {
    console.error('Error loading PLY file with gsplat:', error);
    throw error;
  }
}
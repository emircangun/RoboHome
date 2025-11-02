import * as THREE from 'three';
import { TableConfig } from '../types';

export class Table extends THREE.Group {
  public tableId: string;
  private tableConfig: TableConfig;
  private tableMesh!: THREE.Mesh; // Initialized in createTable()
  private tableLegs: THREE.Mesh[] = [];

  constructor(config: TableConfig) {
    super();
    this.tableId = config.id;
    this.tableConfig = config;
    this.createTable();
    this.updateTransform();
  }

  private createTable(): void {
    const { type, color } = this.tableConfig;
    const colorHex = parseInt(color.replace('#', ''), 16);

    // Create tabletop based on type
    let tableTopGeometry: THREE.BufferGeometry;
    const topHeight = 0.05;
    const topY = 0.75; // Height of table

    switch (type) {
      case 'round':
        tableTopGeometry = new THREE.CylinderGeometry(0.5, 0.5, topHeight, 32);
        break;
      case 'square':
        tableTopGeometry = new THREE.BoxGeometry(1, topHeight, 1);
        break;
      case 'rectangular':
        tableTopGeometry = new THREE.BoxGeometry(1.5, topHeight, 0.8);
        break;
      default:
        tableTopGeometry = new THREE.BoxGeometry(1, topHeight, 1);
    }

    const tableTopMaterial = new THREE.MeshStandardMaterial({
      color: colorHex,
      roughness: 0.7,
      metalness: 0.1
    });

    this.tableMesh = new THREE.Mesh(tableTopGeometry, tableTopMaterial);
    this.tableMesh.position.y = topY;
    this.tableMesh.castShadow = true;
    this.tableMesh.receiveShadow = true;
    this.add(this.tableMesh);

    // Create table legs
    const legGeometry = new THREE.CylinderGeometry(0.03, 0.03, 0.7, 8);
    const legMaterial = new THREE.MeshStandardMaterial({
      color: 0x654321, // Brown wood color
      roughness: 0.8
    });

    const legPositions: [number, number][] = [];
    const legHeight = 0.35;

    switch (type) {
      case 'round':
        // 4 legs in a circle
        for (let i = 0; i < 4; i++) {
          const angle = (i / 4) * Math.PI * 2;
          legPositions.push([
            Math.cos(angle) * 0.35,
            Math.sin(angle) * 0.35
          ]);
        }
        break;
      case 'square':
      case 'rectangular':
        // 4 legs at corners
        const halfX = type === 'rectangular' ? 0.65 : 0.45;
        const halfZ = type === 'rectangular' ? 0.35 : 0.45;
        legPositions.push([halfX, halfZ], [-halfX, halfZ], [halfX, -halfZ], [-halfX, -halfZ]);
        break;
    }

    legPositions.forEach(([x, z]) => {
      const leg = new THREE.Mesh(legGeometry, legMaterial);
      leg.position.set(x, legHeight, z);
      leg.castShadow = true;
      this.tableLegs.push(leg);
      this.add(leg);
    });

    // Add selection outline
    const outlineGeometry = tableTopGeometry.clone();
    outlineGeometry.scale(1.05, 1.05, 1.05);
    const outlineMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      side: THREE.BackSide
    });
    const outline = new THREE.Mesh(outlineGeometry, outlineMaterial);
    outline.position.y = topY;
    outline.visible = false;
    this.add(outline);

    // Store outline reference
    (this as any).outline = outline;
  }

  public updateTransform(): void {
    const [x, y, z] = this.tableConfig.position;
    const [rx, ry, rz] = this.tableConfig.rotation;
    
    this.position.set(x, y, z);
    this.rotation.set(rx, ry, rz);
    this.scale.setScalar(this.tableConfig.scale);
  }

  public updateConfig(config: Partial<TableConfig>): void {
    this.tableConfig = { ...this.tableConfig, ...config };
    
    // If type or color changed, recreate the table
    if (config.type || config.color) {
      // Remove old meshes
      this.tableMesh.removeFromParent();
      this.tableLegs.forEach(leg => leg.removeFromParent());
      this.tableLegs = [];
      
      // Recreate
      this.createTable();
    }
    
    this.updateTransform();
  }

  public setSelected(selected: boolean): void {
    if ((this as any).outline) {
      (this as any).outline.visible = selected;
    }
  }

  public getConfig(): TableConfig {
    return { ...this.tableConfig };
  }
}

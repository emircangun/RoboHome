import * as THREE from 'three';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';

export async function loadPLYFile(url: string): Promise<THREE.BufferGeometry> {
  return new Promise((resolve, reject) => {
    const loader = new PLYLoader();
    loader.load(
      url,
      (geometry) => {
        // Compute normals if not present
        if (!geometry.attributes.normal) {
          geometry.computeVertexNormals();
        }
        resolve(geometry);
      },
      undefined,
      (error) => {
        reject(error);
      }
    );
  });
}

export function createMeshFromPLY(geometry: THREE.BufferGeometry, color: number = 0xcccccc): THREE.Mesh {
  const material = new THREE.MeshStandardMaterial({
    color: color,
    side: THREE.DoubleSide,
    flatShading: false
  });
  
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
}







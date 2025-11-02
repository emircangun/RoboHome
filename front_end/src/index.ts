import { Table } from '../objects/Table';
import { GsplatSetup } from '../utils/gaussianSplatLoader';

export interface TableConfig {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  type: 'round' | 'square' | 'rectangular';
  color: string;
}

export interface RoomScene {
  gsplatSetup?: GsplatSetup;
  tables: Map<string, Table>;
}

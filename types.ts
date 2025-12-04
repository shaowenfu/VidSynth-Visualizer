export interface Segment {
  id: string;
  start: number; // seconds
  end: number; // seconds
  score?: number; // 0-1
  label?: string;
  thumbnailUrl?: string;
  posScore?: number;
  negScore?: number;
}

export interface GroundTruth {
  segments: Segment[];
}

export interface VideoResource {
  id: string;
  name: string;
  url: string; // Video source URL
  thumbnail: string;
  duration: number; // seconds
  hasGT: boolean;
  status: 'idle' | 'processing' | 'ready';
  groundTruth?: GroundTruth;
  predictedSegments: Segment[];
}

export interface ThemeDefinition {
  keywords: string[];
  positiveTags: string[];
  negativeTags: string[];
}

export interface ClusterPoint {
  id: string;
  x: number;
  y: number;
  clusterId: number;
  thumbnail: string;
}

export interface LogEntry {
  id: string;
  type: 'filter' | 'merge' | 'result' | 'info';
  message: string;
  timestamp: string;
}

export interface EdlItem {
  id: string;
  sourceId: string;
  sourceStart: number;
  sourceEnd: number;
  targetStart: number;
  targetEnd: number;
}
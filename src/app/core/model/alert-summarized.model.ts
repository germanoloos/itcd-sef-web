export interface AlertSummarized {
  camera: {
    _id: string;
    name: string;
    type: string;
    metadata?: any;
  };
  total: number;
}

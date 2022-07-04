export interface Alert {
  _id: string;
  camera: {
    _id: string;
    name: string;
    type: string;
  };
  metadata?: any;
  createdAt: Date;
}

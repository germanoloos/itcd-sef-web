import { Alert } from './alert.model';

export interface FullAlertDto extends Alert {
  snapshot: string;
}

import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransmissionSevice {

  private navigationTitleEvent: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  get tranmissionEvent(): EventEmitter<string> {
    return this.navigationTitleEvent;
  }

}

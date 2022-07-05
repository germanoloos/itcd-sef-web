import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  navigationTitleEvent: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  get navigationEvent(): EventEmitter<string> {
    return this.navigationTitleEvent;
  }

}

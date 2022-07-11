import { OverlayContainer } from '@angular/cdk/overlay';
import { EventEmitter, Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  THEME_KEY = "dark-theme";
  themeEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(private storageService: StorageService, private overlay: OverlayContainer) {
    this.toggleTheme(this.isDarkTheme());
  }

  toggleTheme(darkTheme: boolean): void {
    this.storageService.setItem(this.THEME_KEY, darkTheme);
    const  element = document.getElementById("app-itcd") as any;
    if (darkTheme){
      element.classList.add("dark-mode");
      this.overlay.getContainerElement().classList.add("dark-mode");
    } else {
      element.classList.remove("dark-mode");
      this.overlay.getContainerElement().classList.remove("dark-mode");
    }
    this.themeEvent.emit(darkTheme);
  }

  isDarkTheme(): boolean {

    return this.storageService.getItem(this.THEME_KEY) || false;
  }

  get themeChangeEmitter():EventEmitter<boolean> {
    return this.themeEvent;
  }
}

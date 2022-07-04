import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from '@app/core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {

  darkMode = false;
  darkClassName = 'dark-mode';
  @HostBinding('class') className = '';

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.darkMode = this.themeService.isDarkTheme();
  }

  toggleControl(): void {
    this.className = this.darkMode ? this.darkClassName : '';
    this.darkMode = !this.darkMode;
    this.themeService.toggleTheme(this.darkMode);
  }
}

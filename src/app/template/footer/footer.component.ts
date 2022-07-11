import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@app/core/services/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  darkMode = false;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.darkMode = this.themeService.isDarkTheme();
    this.themeService.themeChangeEmitter.subscribe((darkMode: boolean) => {
      this.darkMode = darkMode;
    });
  }

}

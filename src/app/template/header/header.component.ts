import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '@app/core/services/theme.service';
import { AuthenticationService } from '@app/modules/user/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo: string = 'LogoSEF';

  constructor(private themeService: ThemeService) {

  }

  ngOnInit(): void {
    this.setLogoByTheme(this.themeService.isDarkTheme());
    this.themeService.themeChangeEmitter.subscribe((darkMode: boolean) => this.setLogoByTheme(darkMode));

  }

  setLogoByTheme(darkMode: boolean): void {
    this.logo = !darkMode ? 'LogoSEF-dark' : 'LogoSEF';
  }

}

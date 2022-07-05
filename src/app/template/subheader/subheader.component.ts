import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@app/core/services/navigation.service';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  subItem = "";
  constructor(private navigationService: NavigationService) {
    this.navigationService.navigationEvent.subscribe((title: string) => {
      this.subItem = title;
    })
  }
  ngOnInit(): void {
  }
}

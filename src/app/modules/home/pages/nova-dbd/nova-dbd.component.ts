import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@app/core/services/navigation.service';

@Component({
  selector: 'app-nova-dbd',
  templateUrl: './nova-dbd.component.html',
  styleUrls: ['./nova-dbd.component.scss']
})
export class NovaDbdComponent implements OnInit {

  constructor(private navigationService:NavigationService) { }

  ngOnInit(): void {
    this.navigationService.navigationEvent.emit('');
  }

}

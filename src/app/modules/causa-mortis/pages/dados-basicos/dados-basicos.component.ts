import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@app/core/services/navigation.service';

@Component({
  selector: 'app-dados-basicos',
  templateUrl: './dados-basicos.component.html',
  styleUrls: ['./dados-basicos.component.scss']
})
export class DadosBasicosComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.navigationEvent.emit('Causa mortis');
  }

}

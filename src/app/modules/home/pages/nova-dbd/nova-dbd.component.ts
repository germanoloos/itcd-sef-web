import { Component, OnInit } from '@angular/core';
import { TransmissionSevice } from '@app/core/services/transmissao.service';

@Component({
  selector: 'app-nova-dbd',
  templateUrl: './nova-dbd.component.html',
  styleUrls: ['./nova-dbd.component.scss']
})
export class NovaDbdComponent implements OnInit {

  constructor(private navigationService: TransmissionSevice) { }

  ngOnInit(): void {
    this.navigationService.tranmissionEvent.emit('');
  }

}

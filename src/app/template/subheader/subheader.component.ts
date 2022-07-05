import { Component, OnInit } from '@angular/core';
import { TransmissionSevice } from '@app/core/services/transmissao.service';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  subItem = "";
  constructor(private navigationService: TransmissionSevice) {
    this.navigationService.tranmissionEvent.subscribe((title: string) => {
      this.subItem = title;
    })
  }
  ngOnInit(): void {
  }
}

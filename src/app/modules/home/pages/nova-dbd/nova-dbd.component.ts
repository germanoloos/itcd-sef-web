import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoTransmissaoEnum } from '@app/core/enum/tipo-transmissao.enum';
import { TransmissaoModel } from '@app/core/model/transmissao.model';
import {
  CAUSA_MORTIS_ROUTE,
  DADOS_BASICOS_ROUTE,
} from '@app/core/providers/url.provider';
import { DialogService } from '@app/core/services/dialog.service';
import { TransmissionSevice } from '@app/core/services/transmissao.service';
import { TiposService } from '../../services/tipos.service';

@Component({
  selector: 'app-nova-dbd',
  templateUrl: './nova-dbd.component.html',
  styleUrls: ['./nova-dbd.component.scss'],
})
export class NovaDbdComponent implements OnInit {
  tiposTransmissao: TransmissaoModel[] = [];
  constructor(
    private navigationService: TransmissionSevice,
    private tiposService: TiposService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navigationService.tranmissionEvent.emit('');
    this.tiposService.getTipoTransmissao().subscribe({
      next: trn => {
        this.tiposTransmissao = trn;
      },
    });
  }

  redirect(id: any) {
    if (id == TipoTransmissaoEnum.CAUSA_MORTIS) {
      this.router.navigate([
        CAUSA_MORTIS_ROUTE,
        { outlets: { 'causa-mortis': [DADOS_BASICOS_ROUTE] } },
      ]);
    } else {
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialogService.confirmation(
      "Para preenchimento de declaração para tipo de transmissão diferente de 'Causa mortis', o sistema irá redirecionar para outra tela. Deseja prosseguir?"
    );

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        window.location.href =
          'https://www2.fazenda.mg.gov.br/sol/ctrl/SOL/ITCDNV/CADASTRO_0001?ACAO=EXE_PASSO1';
      }
    });
  }
}

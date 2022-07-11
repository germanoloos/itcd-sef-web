import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import {
  BENS_DIREITOS_DIVIDAS_ROUTE,
  CAUSA_MORTIS_ROUTE,
} from '@app/core/providers/url.provider';
import { DomainService } from '@app/core/services/domain.service';
import { BensDireitosDividasService } from '@app/modules/causa-mortis/services/bens-direitos-dividas.service';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
import { catchError, forkJoin, of } from 'rxjs';

export interface ImoveisNoExteriorForm {
  propriedadeDoBem: number;
  utilizacaoDoImovel: number;
  valorTotal: number;
  dataValorTotal: Date;
  percentual: number;
  pais: string;
  codigoPostal: string;
  cidade: string;
  estado: string;
  logradouro: string;
  anexo: File;
}

@Component({
  selector: 'app-imovel-no-exterior',
  templateUrl: './imovel-no-exterior.component.html',
  styleUrls: ['./imovel-no-exterior.component.scss'],
})
export class ImoveisNoExteriorComponent implements OnInit {
  paises!: string[];
  imovelExteriorForm!: IFormGroup<ImoveisNoExteriorForm>;

  constructor(
    private formBuilder: FormBuilder,
    private domainService: DomainService,
    private bensDireitosDividasService: BensDireitosDividasService,
    private route: Router
  ) {}

  ngOnInit(): void {
    // Exemplo para chamada de mais de uma requisição a ser resolvida simultaneamente
    forkJoin({
      paises: this.domainService.getPaises(),
    })
      .pipe(catchError((error: any) => of(error)))
      .subscribe(({ paises }) => {
        this.paises = paises;
      });

    this.imovelExteriorForm = (
      this.formBuilder as IFormBuilder
    ).group<ImoveisNoExteriorForm>({
      propriedadeDoBem: [null, Validators.required],
      utilizacaoDoImovel: [null, Validators.required],
      valorTotal: [null, Validators.required],
      dataValorTotal: [null, Validators.required],
      percentual: [null, Validators.required],
      pais: [null, Validators.required],
      codigoPostal: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
      logradouro: [null, Validators.required],
      anexo: [null],
    });
  }

  onSubmit(): void {
    if (this.imovelExteriorForm.invalid) {
      this.imovelExteriorForm.markAllAsTouched();
      return;
    }

    //:TODO
    // chamar api com os dados do formulário

    this.bensDireitosDividasService
      .postImovelNoExterior(
        this.imovelExteriorForm.value as ImoveisNoExteriorForm
      )
      .subscribe({
        next: () =>
          this.route.navigate([
            CAUSA_MORTIS_ROUTE,
            { outlets: { 'causa-mortis': [BENS_DIREITOS_DIVIDAS_ROUTE] } },
          ]),
        error: err => console.error(err),
      });
  }

  onFileInput(file: any): void {
    console.log(file.target.files);
    if (file.target.files && file.target.files[0]) {
      this.imovelExteriorForm.controls.anexo.setValue(file.target.files[0]);
    }
  }

  get f(): any {
    return this.imovelExteriorForm.controls;
  }
}

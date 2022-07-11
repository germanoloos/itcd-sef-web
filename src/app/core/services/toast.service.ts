import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  config = new MatSnackBarConfig();

  constructor(readonly snackBar: MatSnackBar) {
    this.config = new MatSnackBarConfig();
    this.config.duration = 10000;
    this.config.verticalPosition = "top";
    this.config.horizontalPosition = "center";
  }

  printMsgSucesso(mensagem: string) {
    this.config.panelClass = ['sucesso']
    return this.snackBar.open(mensagem, '', this.config);
  }

  printMsgErro(mensagem: string) {
    this.config.panelClass = ['error']
    return this.snackBar.open(mensagem, '', this.config);
  }

  printMsgAlerta(mensagem: string) {
    this.config.panelClass = ['warning']
    return this.snackBar.open(mensagem, '', this.config);
  }
}

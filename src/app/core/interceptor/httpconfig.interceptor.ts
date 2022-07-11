import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastService } from '../services/toast.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(private toast: ToastService) { }

  @BlockUI() blockUI!: NgBlockUI;
  private requisicoesAtivas = 0;

  private verificaRequisicaoAtiva(_this: any) {
    if (_this.requisicoesAtivas < 0) {
      _this.requisicoesAtivas = 0;
    }
    if (_this.requisicoesAtivas == 0) {
      if (_this && _this.blockUI) {
        _this.blockUI.stop()
      }
    } else {
      if (_this && _this.blockUI && !_this.blockUI.isActive) {
        _this.blockUI.start()
      }
      setTimeout(() => { if (_this && _this.verificaRequisicaoAtiva) _this.verificaRequisicaoAtiva(_this) }, 500);
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (!request.headers.has('Content-Type')) {
    //   request = request.clone({
    //     setHeaders: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
    // }
    this.requisicoesAtivas++;
    this.verificaRequisicaoAtiva(this);

    if (!request.headers.has('Accept')) {
      request = request.clone({
        setHeaders: {
          'Accept': 'application/json'
        }
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.requisicoesAtivas--;
          if (event.body && event.body.msgSucesso && event.body.msgSucesso.length > 0) {
            event.body.msgSucesso.forEach((msg: any) => this.toast.printMsgSucesso(msg));
          }
          if (event.body && event.body.msgAlerta && event.body.msgAlerta.length > 0) {
            event.body.msgAlerta.forEach((msg: any) => this.toast.printMsgAlerta(msg));
          }
          if (event.body && event.body.msgErro && event.body.msgErro.length > 0) {
            event.body.msgErro.forEach((msg: any) => this.toast.printMsgErro(msg));
          }
        }
        return event;
      }),
      catchError(err => {
        this.requisicoesAtivas--;
        if (err.error && err.error.msgErro && err.error.msgErro.length > 0) {
          err.error.msgErro.forEach((msg: any) => this.toast.printMsgErro(msg));
        }
        return throwError(err);
      }
      )
    );
  }
}

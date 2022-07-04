import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  TOKEN_KEY = 'token';

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }

  logon(login: string, password: string): Observable<any> {
    return this.httpClient.post(`${environment.API_URL}/auth/signin`, { login, password });
  }

  logout(): void {
    this.storageService.removeItem(this.TOKEN_KEY);
  }

  getToken(): string {
    return this.storageService.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    this.storageService.setItem(this.TOKEN_KEY, token);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

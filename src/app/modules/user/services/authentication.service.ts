import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_ROUTE, USER_ROUTE } from '@app/core/providers/url.provider';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';
import { environment } from 'src/environments/environment';

export interface User {
  token: string,
  user: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  USER_KEY = 'currentUser';

  private currentUserSubject!: BehaviorSubject<User | null>;
  public currentUser!: Observable<User | null>;

  constructor(private httpClient: HttpClient, private storageService: StorageService, private router: Router) {
    const user: User = this.storageService.getItem(this.USER_KEY);
    this.currentUserSubject = new BehaviorSubject<User | null>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.getValue();
  }

  login(username: string, password: string): Observable<User> {
    return this.httpClient.post<any>(`${environment.URL_LOGIN}auth`, { username, password }).pipe(
      map((user) => {
        this.storageService.setItem(this.USER_KEY, user);
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  logout(): void {
    this.storageService.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate([USER_ROUTE, LOGIN_ROUTE]);
  }

  getToken(): string | undefined {
    return this.currentUserValue?.token;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLoggedIn$ = this.authService.isLoggedIn()?.pipe(
      map((response: { validation: boolean }) => {
        
        return response.validation ? true : this.router.parseUrl('/login');
      })
    );
    console.log(isLoggedIn$);
   return isLoggedIn$ ? isLoggedIn$: of(this.router.parseUrl('/login'));
  }
}

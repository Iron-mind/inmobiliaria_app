// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
 import { AuthService } from './auth.service';
// import { Observable, map } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {


//   constructor(private authService: AuthService, private router: Router) { }

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot){
//     return this.authService.isLoggedIn()?.pipe(
//       map((isLoggedIn: {validation:boolean}) => {
//         if (isLoggedIn.validation) {
//           return true; // El usuario está autenticado y puede acceder a la ruta
//         } else {
//           return this.router.parseUrl('/login'); // Redirige al componente de inicio de sesión
//         }
//       })
//     );
//     // if (this.authService.isLoggedIn()) {
//     //   return true; // El usuario está autenticado y puede acceder a la ruta
//     // } else {
//     //   return this.router.parseUrl('/login'); // Redirige al componente de inicio de sesión
//     // }
//   }
// }
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
        
        return response.validation ? true : this.router.parseUrl('/login');;
      })
    );
    console.log(isLoggedIn$);
   return isLoggedIn$ ? isLoggedIn$: of(this.router.parseUrl('/login'));
  }
}

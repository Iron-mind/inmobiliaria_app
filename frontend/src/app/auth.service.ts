import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private isAuthenticated = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Aquí puedes inicializar el token desde el almacenamiento local si está disponible
    this.token = localStorage.getItem('token') as string;

  }

  login(email: string, password: string) {
    const requestBody = { email: email, password: password };
    return this.http.post<any>(environment.apiURL + '/session', requestBody).subscribe(
      (response:{token:string}) => {
        this.token = response.token; // Reemplaza 'token' por la clave que corresponda a tu backend
        localStorage.setItem('token', this.token); // Almacena el token en el almacenamiento local
        return this.router.navigate(['/home']);
      },
      (err:HttpErrorResponse) => {
        console.error('Error en la solicitud de inicio de sesión:', err);
      }
    );
  }

  logout(): void {
    this.token = ''; // Elimina el token actual
    localStorage.removeItem('token'); // Elimina el token del almacenamiento local
  }

  isLoggedIn() {
    if (this.isAuthenticated) {
      return ; // Si el estado de autenticación ya está establecido como verdadero, no se realiza la solicitud POST adicional
    } else {
      const token = localStorage.getItem('token') as string; // Recupera el token del almacenamiento local
     
      return this.http.post<{validation:boolean}>(environment.apiURL+'/session/verifytoken', {token});

    }
  }
}

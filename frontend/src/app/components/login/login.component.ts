import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
   }
  user = {
    email: '',
    password: ''
  };
  


  login(): void {
    const email = this.user.email;
    const password = this.user.password;
    
    this.authService.login(email, password);
    
  }
  ngOnInit(): void {
    this.authService.isLoggedIn()?.subscribe((res) => {
      if(res.validation){
        this.router.navigateByUrl('/home');
      }})
    
  }
  ngAfterViewInit(): void {
    this.router.navigate(['/home']);

   }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
  ) { }
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
    
  }

}

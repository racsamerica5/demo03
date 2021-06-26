import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="";
  constructor(private loginService: LoginService) {
  }

  cerrar() {
    sessionStorage.clear();
  }
  verificar() {
    return this.loginService.verificar();
  }
}


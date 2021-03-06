import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtRequest } from '../model/jwtRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(request: JwtRequest) {
    return this.http.post("http://localhost:8080/authenticate", request);
  }


  verificar() {
    let token = sessionStorage.getItem("token");
    return token != null;

  }
}


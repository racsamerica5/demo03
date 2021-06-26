import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Propietario } from '../model/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  //private url:string=environment.host+"/propietarios"
  private url: string = `${environment.host}/propietarios`
  private listaCambio = new Subject<Propietario[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Propietario[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insertar(propietario: Propietario) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, propietario, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  modificar(propietario: Propietario) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, propietario, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  eliminar(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      let token = sessionStorage.getItem("token");
      return this.http.post<Propietario[]>(`${this.url}/buscar`, texto.toLowerCase(), {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
      });

    }
    return EMPTY;
  }
  listarId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Propietario>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Propietario[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../model/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private url: string = `${environment.host}/vehiculos`
  private listaCambio = new Subject<Vehiculo[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Vehiculo[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insertar(vehiculo: Vehiculo) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, vehiculo, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  modificar(vehiculo: Vehiculo) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, vehiculo, {
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
    let token = sessionStorage.getItem("token");
    return this.http.post<Vehiculo[]>(`${this.url}/buscar`, texto, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  listarId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Vehiculo>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Vehiculo[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}

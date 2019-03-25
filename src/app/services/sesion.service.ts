import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "../models/Usuario";

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  API_URI = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public verificarDatos(usuario: Usuario){
    return this.http.post(`${this.API_URI}/`, usuario);
  }


}

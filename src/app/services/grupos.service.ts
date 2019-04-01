import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../models/Grupo';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  private API_URI = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  listarGrupos(usuario:Usuario){
    return this.http.post(`${this.API_URI}/grupos/lista`, usuario);
  }
  
  obtnerGrupoPorId(id: string, usuario: Usuario){
    return this.http.post(`${this.API_URI}/grupos/${id}`, usuario);
  }

  crearGrupo(grupo: Grupo){
    return this.http.post(`${this.API_URI}/grupos`, grupo);
  }

  modificarGrupo(grupo: Grupo, id: string){
    return this.http.put(`${this.API_URI}/grupos/${id}`, grupo);
  }

  eliminarGrupo(id: string, usuario:Usuario){
    return this.http.post(`${this.API_URI}/grupos/fin/${id}`, usuario);
  }

}

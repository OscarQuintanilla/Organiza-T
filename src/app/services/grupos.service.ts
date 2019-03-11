import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../models/Grupo';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  private API_URI = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  listarGrupos(){
    return this.http.get(`${this.API_URI}/grupos`);
  }
  
  obtnerGrupoPorId(id: string){
    return this.http.get(`${this.API_URI}/grupos/${id}`);
  }

  crearGrupo(grupo: Grupo){
    return this.http.post(`${this.API_URI}/grupos`, grupo);
  }

  modificarGrupo(grupo: Grupo, id: string){
    return this.http.put(`${this.API_URI}/grupos/${id}`, grupo);
  }

  eliminarGrupo(id: string){
    return this.http.delete(`${this.API_URI}/grupos`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Materia } from "../models/Materia";    
import { Usuario } from '../models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  obtenerListaMaterias(usuario: Usuario){
    return this.http.post(`${this.API_URI}/materias/lista`, usuario);
  }

  obtenerMateriaPorId(id: string, usuario:Usuario){
    return this.http.post(`${this.API_URI}/materias/${id}`, [usuario]);
  }

  agregarMateria(materia: Materia){
    return this.http.post(`${this.API_URI}/materias`, materia);
  }

  actualizarMateria(materia: Materia){
    return this.http.put(`${this.API_URI}/materias/${materia.id}`, materia);
  }

  eliminarMateria(id: string, usuario: Usuario){
    return this.http.post(`${this.API_URI}/materias/fin/${id}`, usuario);
  }

}

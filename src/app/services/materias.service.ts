import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Materia } from "../models/Materia";    
@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  obtenerListaMaterias(){
    return this.http.get(`${this.API_URI}/materias`);
  }

  obtenerMateriaPorId(id: string){
    return this.http.get(`${this.API_URI}/materias/${id}`);
  }

  agregarMateria(materia: Materia){
    return this.http.post(`${this.API_URI}/materias`, materia);
  }

  actualizarMateria(materia: Materia){
    return this.http.put(`${this.API_URI}/materias/${materia.id}`, materia);
  }

  eliminarMateria(id: string){
    return this.http.delete(`${this.API_URI}/materias/${id}`);
  }

}

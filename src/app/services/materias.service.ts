import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Materia } from "../models/Materia";     
import { P } from '@angular/core/src/render3';

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
    return this.http.get(`${this.API_URI}/materia/${id}`);
  }

  agregarMateria(materia: Materia){
    return this.http.post(`${this.API_URI}/materia`, materia);
  }

  actualizarMateria(materia: Materia){
    return this.http.put(`${this.API_URI}/materia`, materia);
  }

  eliminarMateria(id: string){
    return this.http.delete(`${this.API_URI}/materia/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evaluacion } from "../models/Evaluacion";
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionesService {

  private API_URI = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  obtenerListaEvaluaciones(usuario: Usuario) {
    return this.http.post(`${this.API_URI}/evaluaciones/lista`, usuario);
  }
  obtenerEvaluacionPorId(id: string, usuario: Usuario) {
    return this.http.post(`${this.API_URI}/evaluaciones/${id}`, usuario);
  }
  crearEvaluacion(evaluacion: Evaluacion) {
    return this.http.post(`${this.API_URI}/evaluaciones`, evaluacion);
  }
  modificarEvaluacion(id: string, evaluacion: Evaluacion) {
    return this.http.put(`${this.API_URI}/evaluaciones/${id}`, evaluacion);
  }
  eliminarEvaluacion(id: string, usuario:Usuario) {
    return this.http.post(`${this.API_URI}/evaluaciones/fin/${id}`, usuario);
  }

}

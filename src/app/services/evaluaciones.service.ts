import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evaluacion } from "../models/Evaluacion";

@Injectable({
  providedIn: 'root'
})
export class EvaluacionesService {

  private API_URI = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  obtenerListaEvaluaciones() {
    return this.http.get(`${this.API_URI}/evaluaciones`);
  }

  obtenerEvaluacionPorId(id: string) {
    return this.http.get(`${this.API_URI}/evaluaciones/${id}`);
  }
  crearEvaluacion(evaluacion: Evaluacion) {
    return this.http.post(`${this.API_URI}/evaluaciones`, evaluacion);
  }
  modificarEvaluacion(id: string, evaluacion: Evaluacion) {
    return this.http.put(`${this.API_URI}/evaluaciones/${id}`, evaluacion);
  }
  eliminarEvaluacion(id: string) {
    return this.http.delete(`${this.API_URI}/evaluaciones/${id}`);
  }

}

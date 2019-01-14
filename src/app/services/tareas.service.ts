import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/Tarea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  obtenerListaTareas() {
    return this.http.get(`${this.API_URI}/tareas`);
  }

  obtenerTareaPorId(id: string){
    return this.http.get(`${this.API_URI}/tareas/${id}`);
  }

  agregarTarea(tarea: Tarea){
    return this.http.post(`${this.API_URI}/tareas`, tarea);
  }

  eliminarTarea(id: string){
    return this.http.delete(`${this.API_URI}/tareas/${id}`);
  }

  actualizarTarea(id: string, actualizacion: Tarea)  {
    return this.http.put(`${this.API_URI}/tareas/${id}`, actualizacion);
  }

}
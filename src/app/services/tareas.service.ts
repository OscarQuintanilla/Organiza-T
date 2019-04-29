import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/Tarea';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  obtenerListaTareas(idUsuario: Usuario) {
    return this.http.post(`${this.API_URI}/tareas/lista/`, idUsuario);
  }

  obtenerTareaPorId(id: string, usuario: Usuario) {
    return this.http.post(`${this.API_URI}/tareas/${id}`, usuario);
  }

  agregarTarea(tarea: Tarea) {
    console.log(tarea);
    return this.http.post(`${this.API_URI}/tareas/crear/crear`, tarea);
  }

  eliminarTarea(id: string, usuario: Usuario) {
    return this.http.post(`${this.API_URI}/tareas/fin/${id}`, usuario);
  }

  actualizarTarea(id: string, actualizacion: Tarea) {
    return this.http.put(`${this.API_URI}/tareas/${id}`, actualizacion);
  }

}
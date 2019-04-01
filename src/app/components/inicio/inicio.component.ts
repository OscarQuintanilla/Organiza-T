import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { EvaluacionesService } from 'src/app/services/evaluaciones.service';
import { MateriasService } from 'src/app/services/materias.service';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';
import { SesionComponent } from 'src/app/sesion/sesion.component';
import { NavComponent } from 'src/app/nav/nav.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tareas: any = [];
  tareasSemana: any = [];
  evaluaciones: any = [];
  evaluacionesSemana: any = [];
  materias: any = [];
  agendaSemana: any = [];
  hoy: Date = new Date();
  usuario: Usuario;

  constructor(
    private tareasService: TareasService,
    private evaluacionesService: EvaluacionesService,
    private materiasServices: MateriasService,
    private router: Router,
    private nav: NavComponent
  ) { }

  ngOnInit() {
    if (this.nav.sesionIniciada) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.usuario = this.usuario[0];
      this.obtenerAgendaSemanal();
    }else{
      this.router.navigate(['/sesion']);
    }

  }
  borrarTarea(id: string) {
    this.tareasService.eliminarTarea(id, this.usuario).subscribe(
      res => {
        this.obtenerAgendaSemanal();
      },
      error => console.log(error)
    );
  }
  eliminarEvaluacion(id: string) {
    this.evaluacionesService.eliminarEvaluacion(id, this.usuario).subscribe(
      res => {
        this.obtenerAgendaSemanal();
      }
    )
  }

  obtenerAgendaSemanal() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.usuario = this.usuario;
    this.tareasService.obtenerListaTareas(this.usuario).subscribe(
      res => {
        this.tareas = res;
        for (let i = 0; i < this.tareas.length; i++) {
          let fecha = new Date(this.tareas[i].FechaEntrega);
          let hoy = new Date();
          if (fecha.getFullYear() - hoy.getFullYear() == 0) {
            if (fecha.getMonth() - hoy.getMonth() == 0) {
              if (fecha.getDate() - hoy.getDate() < 8 && fecha.getDate() - hoy.getDate() >= 0) {
                this.tareasSemana[i] = this.tareas[i];
                this.agendaSemana.push(this.tareas[i]);
              }
            }
          }
        }
      },
      error => console.error(error)
    );
    this.evaluacionesService.obtenerListaEvaluaciones(this.usuario).subscribe(
      res => {
        this.evaluaciones = res;
        for (let i = 0; i < this.evaluaciones.length; i++) {
          let fecha = new Date(this.evaluaciones[i].Fecha);
          let hoy = new Date();
          if (fecha.getFullYear() - hoy.getFullYear() == 0) {
            if (fecha.getMonth() - hoy.getMonth() == 0) {
              if (fecha.getDate() - hoy.getDate() < 8 && fecha.getDate() - hoy.getDate() >= 0) {
                this.evaluacionesSemana[i] = this.evaluaciones[i];
                this.agendaSemana.push(this.evaluaciones[i]);
              }
            }
          }
        }
      },
      error => console.error(error)
    );
    this.listarMaterias();
  }

  listarMaterias() {
    this.materiasServices.obtenerListaMaterias(this.usuario).subscribe(
      res => {
        this.materias = res;
        var i = 0;
        var avatares: any = document.getElementsByClassName('imgMateria');
        this.agendaSemana.forEach(evento => {
          this.materias.forEach(materia => {
            if (evento.idMateria == materia.id) {
              evento.ruta = materia.url;
              evento.Materia = materia.Nombre;
              avatares[i].style.backgroundImage = "url(../../../../assets/img/letras/" + evento.ruta + ")";
            }
          });
          i++;
        });

      },
      error => console.log("Error: " + error)
    );
  }
}

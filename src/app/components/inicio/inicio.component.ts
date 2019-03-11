import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { EvaluacionesService } from 'src/app/services/evaluaciones.service';
import { MateriasService } from 'src/app/services/materias.service';

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
  hoy: Date = new Date();

  constructor(
    private tareasService: TareasService,
    private evaluacionesService: EvaluacionesService,
    private materiasServices: MateriasService
  ) { }

  ngOnInit() {
    this.obtenerAgendaSemanal();
  }

  obtenerAgendaSemanal() {
    this.tareasService.obtenerListaTareas().subscribe(
      res => {
        this.tareas = res;
        for (let i = 0; i < this.tareas.length; i++) {
          let fecha = new Date(this.tareas[i].FechaEntrega);
          let hoy = new Date();
          if (fecha.getFullYear() - hoy.getFullYear() == 0) {
            if (fecha.getMonth() - hoy.getMonth() == 0) {
              if (fecha.getDate() - hoy.getDate() < 8 && fecha.getDate() - hoy.getDate() >= 0) {
                this.tareasSemana[i] = this.tareas[i];
                this.listarMaterias();
              }
            }
          }
        }
      },
      error => console.error(error)
    );
    this.evaluacionesService.obtenerListaEvaluaciones().subscribe(
      res => {
        this.evaluaciones = res;
        for (let i = 0; i < this.evaluaciones.length; i++) {
          let fecha = new Date(this.evaluaciones[i].Fecha);
          let hoy = new Date();
          if (fecha.getFullYear() - hoy.getFullYear() == 0) {
            if (fecha.getMonth() - hoy.getMonth() == 0) {
              if (fecha.getDate() - hoy.getDate() < 8 && fecha.getDate() - hoy.getDate() >= 0) {
                this.evaluacionesSemana[i] = this.evaluaciones[i];
                this.listarMaterias();
              }
            }
          }
        }
      },
      error => console.error(error)
    );
  }

  listarMaterias() {
    this.materiasServices.obtenerListaMaterias().subscribe(
      res => {
        this.materias = res;
        this.pintarImgMateriaTarea();
        this.pintarImgMateriaEvaluacion();
      },
      error => console.log("Error: " + error)
    );
  }
  pintarImgMateriaTarea() {
    var i = 0;
    var avatares: any = [];
    avatares = document.getElementsByClassName('imgMateria');
    this.tareasSemana.forEach(tarea => {
      this.materias.forEach(materia => {
        if (tarea.idMateria == materia.id) {
          tarea.ruta = materia.url;
          this.tareasSemana[i].Materia = materia.Nombre;
          avatares[i].style.backgroundImage = "url(../../../../assets/img/letras/" + tarea.ruta + ")";
        }
      });
      i++;
    });
  }
  pintarImgMateriaEvaluacion() {
    var i = 0;
    var avatares: any = [];
    var nombreMateria: any = [];
    avatares = document.getElementsByClassName('imgMateria');
    nombreMateria = document.getElementsByClassName('materia');
    this.evaluaciones.forEach(evaluacion => {
      this.materias.forEach(materia => {
        if (evaluacion.idMateria == materia.id) {
          evaluacion.ruta = materia.url;
          this.evaluaciones[i].Materia = materia.Nombre;
          avatares[i].style.backgroundImage = "url(../../../../assets/img/letras/" + evaluacion.ruta + ")";
        }
      });
      i++;
    });
  }
}

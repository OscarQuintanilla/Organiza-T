import { Component, OnInit } from '@angular/core';
import { EvaluacionesService } from "../../services/evaluaciones.service";
import { MateriasService } from 'src/app/services/materias.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.css']
})
export class EvaluacionesComponent implements OnInit {

  evaluaciones: any = [];
  materias: any = [];
  usuario: Usuario;

  constructor(private evaluacionesService: EvaluacionesService, private materiasServices: MateriasService) { 
  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.usuario = this.usuario[0];
    this.listarEvaluaciones();
    this.listarMaterias();
  }

  listarEvaluaciones() {
    this.evaluacionesService.obtenerListaEvaluaciones().subscribe(
      res => {
        this.evaluaciones = res;
      }
    )
  }
  eliminarEvaluacion(id: string) {
    this.evaluacionesService.eliminarEvaluacion(id).subscribe(
      res => {
        this.listarEvaluaciones();
      }
    )
  }
  listarMaterias() {
    this.materiasServices.obtenerListaMaterias(this.usuario).subscribe(
      res => {
        this.materias = res;
        this.pintarImgMateria();
      },
      error => console.log("Error: " + error)
    );
  }
  pintarImgMateria() {
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

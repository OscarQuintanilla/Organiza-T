import { Component, OnInit, Input, Output } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { PeticionesService } from "../../services/peticiones.services";
import { Router } from "@angular/router";
import { MateriasService } from "../../services/materias.service";
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  providers: [PeticionesService]
})
export class TareasComponent implements OnInit {

  tareas: any = [];
  materias: any = [];
  ruta: string = "";
  usuario: Usuario;

  constructor(private tareasService: TareasService, private router: Router, private materiasServices: MateriasService) {
  }
  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.usuario = this.usuario[0];
    this.listarTareas();
  }
  listarTareas() {
    this.tareasService.obtenerListaTareas(this.usuario).subscribe(
      res => {
        this.tareas = res;
        this.listarMaterias();
      },
      err => console.error(err)
    );
  }
  borrarTarea(id: string) {
    this.tareasService.eliminarTarea(id, this.usuario).subscribe(
      res => {
        console.log(res);
        this.listarTareas();
      },
      error => console.log(error)
    );
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
    avatares = document.getElementsByClassName('imgMateria');
    this.tareas.forEach(tarea => {
      this.materias.forEach(materia => {
        if (tarea.idMateria == materia.id) {
          tarea.ruta = materia.url;
          this.tareas[i].Materia = materia.Nombre;          
          avatares[i].style.backgroundImage = "url(../../../../assets/img/letras/" + tarea.ruta + ")";
        }        
      });
      i++;
    });
  }
}
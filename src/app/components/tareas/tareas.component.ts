import { Component, OnInit, Input, Output } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { PeticionesService } from "../../services/peticiones.services";
import { Router } from "@angular/router";
import { MateriasService } from "../../services/materias.service";

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

  constructor(private tareasService: TareasService, private router: Router, private materiasServices: MateriasService) {
  }
  ngOnInit() {
    this.listarTareas();
  }
  listarTareas() {
    this.tareasService.obtenerListaTareas().subscribe(
      res => {
        this.tareas = res;
        this.listarMaterias();
      },
      err => console.error(err)
    );
  }
  borrarTarea(id: string) {
    this.tareasService.eliminarTarea(id).subscribe(
      res => {
        console.log(res);
        this.listarTareas();
      },
      error => console.log(error)
    );
  }

  listarMaterias() {
    this.materiasServices.obtenerListaMaterias().subscribe(
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
          avatares[i].style.backgroundImage = "url(../../../../assets/img/letras/" + tarea.ruta + ")";
        }        
      });
      i++;
    });
  }
}
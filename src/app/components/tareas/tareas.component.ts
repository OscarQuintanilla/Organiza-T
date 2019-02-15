import { Component, OnInit, Input, Output } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { PeticionesService } from "../../services/peticiones.services";
import { Router } from "@angular/router";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  providers: [PeticionesService]
})
export class TareasComponent implements OnInit {

  @Output() id = new EventEmitter();
  tareas: any = [];

  constructor(private tareasService: TareasService, private router: Router) {
  }

  ngOnInit() {
    this.listarTareas();

  }
  listarTareas() {
    this.tareasService.obtenerListaTareas().subscribe(
      res => {
        this.tareas = res;
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
    )
  }

}
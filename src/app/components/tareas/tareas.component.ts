import { Component, OnInit } from '@angular/core';
import { Tareas } from './tareas';
import { TareasService } from '../../services/tareas.service';
import { PeticionesService } from "../../services/peticiones.services";

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  providers: [PeticionesService]
})
export class TareasComponent implements OnInit {

  tareas: any = [];

  constructor(private tareasService: TareasService) {
  }

  ngOnInit() {
    this.tareasService.obtenerListaTareas().subscribe(
      res => {
        this.tareas = res;
      },
      err => console.error(err)
    );

  }



}

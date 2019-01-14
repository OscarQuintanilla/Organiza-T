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

  public nombre: string = "Oscar David";
  apellido: any = "Quintanilla";

  public tarea: Tareas;

  constructor(
    private _peticionesService: PeticionesService,
    private tareasService: TareasService
  ) {
    
    console.log("Carga exitosa de las tareas.");
    this.tarea = new Tareas(
      1,
      'Realizar Guia 6',
      'Completar la guia de laboratorio #6 en Edmodo',
      false,
      'Desarrollo de practicas',
      'Digital',
      "2018-31-01"
    );
    

  }

  ngOnInit() {
    console.log(this._peticionesService.prueba());
    this.tareasService.obtenerListaTareas().subscribe(
      res => console.log(res), 
      err=> console.error(err)
    );

  }



}

import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';
import { TareasService } from "../../../services/tareas.service";
import { GeneralService } from "../../../services/general.service";


@Component({
  selector: 'app-form-tareas',
  templateUrl: './form-tareas.component.html',
  styleUrls: ['./form-tareas.component.css']
})
export class FormTareasComponent implements OnInit {

  tarea: Tarea = {
    id: "",
    Titular: "",
    Descripcion: "",
    Completada: false,
    Tipo: "",
    FormatoPresentacion: "",
    FechaEntrega: new Date(),
    idUsuario: "",
  };


  constructor(private tareaService: TareasService, private generalServices:GeneralService) { }

  ngOnInit() {
  }

  public guardarTarea() {
    this.tarea.FechaEntrega = this.generalServices.convertirFecha(this.tarea.FechaEntrega);
    console.log(this.tarea);
    /*this.tareaService.agregarTarea(this.tarea)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      );*/
  }

}

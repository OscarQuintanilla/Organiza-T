import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';
import { TareasService } from "../../../services/tareas.service";
import { GeneralService } from "../../../services/general.service";
import { ActivatedRoute, Router } from '@angular/router';


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
    idMateria: "",
  };
  identificador: any;
  editar: boolean = false;

  constructor(private tareaService: TareasService, private generalServices: GeneralService,
    private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.tareaService.obtenerTareaPorId(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.tarea = res[0];
          },
          err => console.error(err)
        )
      this.editar = true;
    }

  }

  public guardarTarea() {
    this.tarea.idMateria = "MA00000001";
    this.tarea.idUsuario = "MASTER";
    this.tarea.FechaEntrega = this.generalServices.convertirFecha(this.tarea.FechaEntrega);
    this.generalServices.generarId('tarea').subscribe(
      res => {
        this.identificador = res;
        this.tarea.id = this.identificador.id;
        this.tareaService.agregarTarea(this.tarea)
          .subscribe(
            res => {
              console.log(res);
            },
            err => console.error(err)
          );
        this.router.navigate(['/tareas']);
      },
      err => console.error(err)
    );
  }

  public modificarTarea() {
    this.tarea.FechaEntrega = this.generalServices.convertirFecha(this.tarea.FechaEntrega);
    this.tareaService.actualizarTarea(this.tarea.id, this.tarea).subscribe(
      res => {
        this.router.navigate(['/tareas']);
      },
      err => console.log(err)
    )
  }
}



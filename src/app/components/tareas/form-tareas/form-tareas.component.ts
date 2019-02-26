import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';
import { TareasService } from "../../../services/tareas.service";
import { MateriasService } from "../../../services/materias.service";
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

  materias: any = [];

  constructor(private tareaService: TareasService, private generalServices: GeneralService,
    private router: Router, private activedRoute: ActivatedRoute, private materiasServices: MateriasService) { }

  ngOnInit() {
    this.listarMaterias();
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
    console.log(avatares[0]);
    this.materias.forEach(materia => {
      if (this.tarea.idMateria == materia.id) {        
        console.log("1 " + materia.ruta);
        avatares[i].style.backgroundImage = "url(../../../../../assets/img/letras/" + materia.ruta + ")";
      }else if(this.tarea.idMateria == "" || this.tarea.idMateria == undefined){
        avatares[i].style.backgroundImage = "url(../../../../../assets/img/letras/sinImagen.png)";
      }
    });
  }
}
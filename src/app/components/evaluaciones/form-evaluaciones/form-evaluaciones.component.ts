import { Component, OnInit } from '@angular/core';
import { EvaluacionesService } from 'src/app/services/evaluaciones.service';
import { Evaluacion } from 'src/app/models/Evaluacion';
import { MateriasService } from 'src/app/services/materias.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-form-evaluaciones',
  templateUrl: './form-evaluaciones.component.html',
  styleUrls: ['./form-evaluaciones.component.css']
})
export class FormEvaluacionesComponent implements OnInit {

  evaluacion: Evaluacion = {
    id: "",
    Temas: "",
    TipoEvaluacion: "",
    Formato: "",
    idMateria: "",
    idUsuario: "",
    Fecha: new Date(),
    NombreEvaluacion: "",
  }
  identificador: any;
  materias: any = [];
  editar: boolean = false;
  usuario: Usuario;

  constructor(private evaluacionesService: EvaluacionesService, private materiasServices: MateriasService, private router: Router,
    private generalService: GeneralService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.usuario = this.usuario[0];
    this.listarMaterias();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.evaluacionesService.obtenerEvaluacionPorId(params.id).subscribe(
        res => {
          this.evaluacion = res[0];
        }
      );
      this.editar = true;
    }
  }

  guardarEvaluacion() {
    this.generalService.generarId('evaluacion').subscribe(
      res => {
        this.identificador = res;
        this.evaluacion.id = this.identificador.id;
        this.evaluacion.Fecha = this.generalService.convertirFechaParaMSQL(this.evaluacion.Fecha);
        this.evaluacion.idUsuario = 'MASTER';
        console.log(this.evaluacion.id)
        this.evaluacionesService.crearEvaluacion(this.evaluacion).subscribe(
          res => {
            this.router.navigate(['/evaluaciones']);
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );

  }

  modificarEvaluacion() {
    this.evaluacion.Fecha = this.generalService.convertirFechaParaMSQL(this.evaluacion.Fecha);
    this.evaluacionesService.modificarEvaluacion(this.evaluacion.id, this.evaluacion).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/evaluaciones']);
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
    this.materias.forEach(materia => {
      if (this.evaluacion.idMateria == materia.id) {
        avatares[i].style.backgroundImage = "url(../../../../../assets/img/letras/" + materia.ruta + ")";
      } else if (this.evaluacion.idMateria == "" || this.evaluacion.idMateria == undefined) {
        avatares[i].style.backgroundImage = "url(../../../../../assets/img/letras/sinImagen.png)";
      }
    });
  }



}

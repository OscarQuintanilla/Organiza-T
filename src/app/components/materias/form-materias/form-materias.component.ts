import { Component, OnInit } from '@angular/core';
import { Materia } from "../../../models/Materia";
import { MateriasService } from "../../../services/materias.service";
import { GeneralService } from "../../../services/general.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-materias',
  templateUrl: './form-materias.component.html',
  styleUrls: ['./form-materias.component.css']
})
export class FormMateriasComponent implements OnInit {

  materia: Materia = {
    id: "",
    Nombre: "",
    Docente: "",
    Tipo: "",
    idUsuario: "",
    url: "sinImagen.png",
  }
  editar: boolean = false;
  color: "";
  aColores: any[];

  constructor(private materiasServices: MateriasService, private activedRoute: ActivatedRoute,
    private generalService: GeneralService, private router: Router) { }

  ngOnInit() {
    this.materia.url = "sinImagen.png";
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.materiasServices.obtenerMateriaPorId(params.id)
        .subscribe(
          res => {
            this.materia = res[0];
          },
          err => console.error(err)
        );
      this.editar = true;
    }
  }

  generarURL(): void {
    var url: string = "";
    if (this.materia.Nombre != undefined) {
      let primeraLetra = this.materia.Nombre.charAt(0).toLowerCase();
      if (primeraLetra == undefined || primeraLetra == "" || this.color == undefined) {
        this.materia.url = "sinImagen.png";
      } else {
        this.materia.url = primeraLetra + this.color + ".jpg";
      }
    }

  }

  guardarMateria() {
    var identificador;
    this.generalService.generarId('materia').subscribe(
      res => {
        identificador = res;
        this.materia.id = identificador.id;
        this.materia.idUsuario = "MASTER";
        try {
          this.materiasServices.agregarMateria(this.materia).subscribe(
            res => {
              this.router.navigate(['/materias']);
            },
            error => console.log(error)
          );
        } catch (error) {
          console.log(error);
          if (error == "") {
            console.log("Error desconocido al insertar materia.");
          }
        }
      }
    );
  }
  modificarMateria(){
    this.materiasServices.actualizarMateria(this.materia).subscribe(
      res => {
        this.router.navigate(['/materias']);
      }
    );
  }
}
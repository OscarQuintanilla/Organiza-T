import { Component, OnInit } from '@angular/core';
import { Materia } from "../../../models/Materia";
import { MateriasService } from "../../../services/materias.service";
import { GeneralService } from "../../../services/general.service";

@Component({
  selector: 'app-form-materias',
  templateUrl: './form-materias.component.html',
  styleUrls: ['./form-materias.component.css']
})
export class FormMateriasComponent implements OnInit {

  materia: Materia = {
    id: "",
    nombre: "",
    docente: "",
    tipo: "",
    idUsuario: "",
    url: "sinImagen.png",
  }

  color: "";

  constructor(private materiasSerices: MateriasService, private generalService: GeneralService  ) { }

  ngOnInit() {
    this.materia.url = "sinImagen.png";
  }

  generarURL(): void {
    var url:string = "";
    let primeraLetra = this.materia.nombre.charAt(0).toLowerCase();
    if (primeraLetra == undefined || primeraLetra == "" || this.color == undefined) {
      this.materia.url = "sinImagen.png";
    } else {
      this.materia.url = primeraLetra + this.color + ".jpg";
    }
  }

  guardarMateria(){
    var identificador;
    this.generalService.generarId('materia').subscribe(
      res => {
        identificador = res;
        this.materia.id = identificador.id;
        console.log(this.materia);
      }
    )
    
  }

}

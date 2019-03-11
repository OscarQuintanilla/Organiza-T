import { Component, OnInit } from '@angular/core';
import { GruposService } from 'src/app/services/grupos.service';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  grupos: any = [];
  materias: any = [];

  constructor(private gruposServices: GruposService, private materiasServices: MateriasService) { }

  ngOnInit() {
    this.listarGrupos();
  }

  listarGrupos(){
    this.gruposServices.listarGrupos().subscribe(
      res => {
        this.grupos = res;
        this.listarMaterias();
      },
      error => console.log(error)
    );
  }

  eliminarGrupos(id: string){
    this.gruposServices.eliminarGrupo(id).subscribe(
      res => {
        this.listarGrupos();
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
    var nombreMateria: any = [];
    avatares = document.getElementsByClassName('imgMateria');
    nombreMateria = document.getElementsByClassName('materia');
    this.grupos.forEach(grupo => {
      this.materias.forEach(materia => {
        if (grupo.idMateria == materia.id) {
          grupo.ruta = materia.url;
          this.grupos[i].Materia = materia.Nombre;
          avatares[i].style.backgroundImage = "url(../../../../assets/img/letras/" + grupo.ruta + ")";
        }
      });
      i++;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { GruposService } from 'src/app/services/grupos.service';
import { MateriasService } from 'src/app/services/materias.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  usuario: Usuario;
  grupos: any = [];
  materias: any = [];

  constructor(private gruposServices: GruposService, private materiasServices: MateriasService) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.usuario = this.usuario[0];
    this.listarGrupos();
  }

  listarGrupos(){
    this.gruposServices.listarGrupos(this.usuario).subscribe(
      res => {
        this.grupos = res;
        this.listarMaterias();
      },
      error => console.log(error)
    );
  }

  eliminarGrupo(id: string){
    this.gruposServices.eliminarGrupo(id, this.usuario).subscribe(
      res => {
        this.listarGrupos();
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

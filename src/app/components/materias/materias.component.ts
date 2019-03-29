import { Component, OnInit } from '@angular/core';
import { PeticionesService } from "../../services/peticiones.services";
import { Router } from "@angular/router";
import { MateriasService } from "../../services/materias.service";
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  materias: any = [];
  srcImg: any = [];
  usuario: Usuario;

  constructor(private materiaService: MateriasService, private router: Router) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.usuario = this.usuario[0];
    this.listarMaterias();
    
  }

  listarMaterias() {
    this.materiaService.obtenerListaMaterias(this.usuario).subscribe(
      res => {
        this.materias = res;
      },
      err => console.log('Error al listar materias.component: ' + err)
    );
  }

  

  borrarMateria(id: string) {
    this.materiaService.eliminarMateria(id, this.usuario).subscribe(
      res => {
        this.listarMaterias();
        this.router.navigate(['/materias']);
      },
      err => console.log('Error al eliminar materia.component: ' + err)
    );
  }
}

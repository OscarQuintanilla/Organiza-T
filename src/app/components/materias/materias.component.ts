import { Component, OnInit } from '@angular/core';
import { PeticionesService } from "../../services/peticiones.services";
import { Router } from "@angular/router";
import { MateriasService } from "../../services/materias.service";

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  materias: any = [];
  srcImg: any = [];

  constructor(private materiaService: MateriasService, private router: Router) { }

  ngOnInit() {
    this.listarMaterias();
  }

  listarMaterias() {
    this.materiaService.obtenerListaMaterias().subscribe(
      res => {
        this.materias = res;
      },
      err => console.log('Error al listar materias.component: ' + err)
    );
  }

  

  borrarMateria(id: string) {
    this.materiaService.eliminarMateria(id).subscribe(
      res => {
        this.listarMaterias();
        this.router.navigate(['/materias']);
      },
      err => console.log('Error al eliminar materia.component: ' + err)
    );
  }
}

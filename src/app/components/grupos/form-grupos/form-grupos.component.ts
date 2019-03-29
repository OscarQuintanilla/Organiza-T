import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/services/materias.service';
import { GruposService } from 'src/app/services/grupos.service';
import { Grupo } from 'src/app/models/Grupo';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-form-grupos',
  templateUrl: './form-grupos.component.html',
  styleUrls: ['./form-grupos.component.css']
})
export class FormGruposComponent implements OnInit {

  usuario: Usuario;
  materias: any = [];
  editar: boolean = false;
  grupo: Grupo = {
    id: "",
    descripcion: "",
    miembros: "",
    idUsuario: "",
    idMateria: "",
  }

  constructor(private materiasServices: MateriasService, private gruposService: GruposService, private router: Router,
    private generalService: GeneralService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.usuario = this.usuario[0];
    this.listarMaterias();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gruposService.obtnerGrupoPorId(params.id).subscribe(
        res => {
          this.grupo = res[0];
        }
      );
      this.editar = true;
    }

  }

  listarMaterias() {
    this.materiasServices.obtenerListaMaterias(this.usuario).subscribe(
      res => {
        this.materias = res;
      },
      error => console.log("Error: " + error)
    );
  }

  guardarGrupo() {
    this.grupo.idUsuario = "MASTER";
    this.generalService.generarId("grupo").subscribe(
      res => {
        let id: any = res;
        this.grupo.id = id.id;
        console.log(this.grupo.id);
        this.gruposService.crearGrupo(this.grupo).subscribe(
          res => {
            this.router.navigate(['/grupos']);
          },
          error => console.log(error)
        );
      }
    );
  }


  modificarGrupo(id: string) {
    this.gruposService.modificarGrupo(this.grupo, id).subscribe(
      res => {
        this.router.navigate(['/grupos']);
      },
      error => console.log(error)
    );
  }


}

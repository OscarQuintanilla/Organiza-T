import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { SesionService } from 'src/app/services/sesion.service';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { NavComponent } from 'src/app/nav/nav.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = {
    idUsuario: "",
    NombreLogin: "",
    Nombre: "",
    Apellido: "",
    Carrera: "",
    Correo: "",
    Clave: "",
    Imagen: ""
  }
  idResponse: any = [];
  claveCollection: any = [];
  ver: boolean = false;
  constructor(private sesionService: SesionService, private router: Router, private generalService: GeneralService,
    private nav: NavComponent) { }

  ngOnInit() {
    this.claveCollection = document.getElementsByName('Clave');
    this.claveCollection = this.claveCollection[0];
  }

  verClave() {
    if (this.ver) {
      this.claveCollection.setAttribute('type', 'password');
      this.ver = false;
    } else {
      this.claveCollection.setAttribute('type', 'text');
      this.ver = true;
    }

  }

  registrarUsuario() {
    this.generalService.generarId('perfil').subscribe(
      res => {
        this.idResponse = res;
        this.usuario.Imagen = 'nofoto.png'
        this.usuario.idUsuario = this.idResponse.id
        this.sesionService.registrarUsuario(this.usuario).subscribe(
          res => {
            localStorage.setItem('usuario', JSON.stringify(this.usuario));
            this.router.navigate(['/']);
          },
          error => console.log(error)
        )
      }
    )
    console.log(this.usuario);

    
  }

}

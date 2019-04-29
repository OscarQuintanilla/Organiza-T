import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { SesionService } from 'src/app/services/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

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
  ver: boolean = false;
  claveCollection: any = [];
  constructor(private sesionService: SesionService, private router: Router) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.usuario = this.usuario[0];
    this.claveCollection = document.getElementsByName('Clave');
    this.claveCollection = this.claveCollection[0];
    console.log(this.usuario);
  }

  actualizarDatos(){
    this.sesionService.actualizarUsuario(this.usuario).subscribe(
      res => {
        this.router.navigate(['/perfil']);
      }, 
      error => console.error(error)
    )
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
}

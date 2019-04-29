import { Component, OnInit } from '@angular/core';
import { Usuario } from "../models/Usuario";
import { SesionService } from '../services/sesion.service';
import { Router } from '@angular/router';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

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
  errorInicio = false;

  respuesta: any;

  constructor(private sesionService: SesionService, private router: Router, private nav: NavComponent) { }

  ngOnInit() {
    if (localStorage.getItem("usuario") != undefined) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.usuario = this.usuario[0];
      console.log(this.usuario);
      if (this.usuario.idUsuario != "") {
        this.router.navigate(['/inicio']);
      } else {
        this.router.navigate(['/']);
        localStorage.removeItem('usuario');
      }

    }
  }

  iniciarSesion() {
    if (localStorage.getItem("usuario") != undefined) {
      console.log("Existía");
      localStorage.removeItem("usuario");
    }
    this.usuario.NombreLogin = this.usuario.Correo;
    this.sesionService.verificarDatos(this.usuario).subscribe(
      res => {
        this.respuesta = res;
        if (this.respuesta.length > 0) {
          localStorage.setItem("usuario", JSON.stringify(this.respuesta));
          this.usuario = JSON.parse(localStorage.getItem('usuario'));
          this.usuario = this.usuario[0];
          if (
            this.usuario.Nombre != undefined &&
            (this.usuario.idUsuario != undefined || this.usuario.idUsuario != "")
          ) {
            console.log(this.usuario.Nombre + this.usuario.idUsuario)
            this.errorInicio = false;
            //this.nav.usuario = this.usuario;
            this.nav.sesionIniciada = true;
            this.router.navigate(['/inicio']);  
          }
        } else {
          console.log("Error en los datos");
          this.errorInicio = true;
          this.nav.sesionIniciada = false;
        }
      },
      error => console.error(error)
    )
  }

}

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

  respuesta: any;

  constructor(private sesionService: SesionService, private router: Router, private nav: NavComponent) { }

  ngOnInit() {
    if (localStorage.getItem("usuario") != undefined) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.router.navigate(['/inicio']);
    }
  }

  iniciarSesion(){
    this.usuario.NombreLogin = this.usuario.Correo;
    this.sesionService.verificarDatos(this.usuario).subscribe(
      res => {
        this.respuesta = res;
        localStorage.setItem("usuario", JSON.stringify(this.respuesta));
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
        this.nav.sesionIniciada = true;        



        this.router.navigate(['/inicio']);
      }, 
      error => console.error(error)
    )
  }

}

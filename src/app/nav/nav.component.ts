import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../services/general.service';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  sesionIniciada: any;
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

  constructor(private router: Router, private generalService: GeneralService) { }

  ngOnInit() {
    //this.generalService.validarSesion();
    if (localStorage.getItem('usuario') != undefined ) {
      this.sesionIniciada = true;
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.usuario = this.usuario[0];
    } else {
      this.sesionIniciada = false;
    }
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.sesionIniciada = false;
    this.router.navigate(['/sesion']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Usuario } from "../models/Usuario";

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

  constructor() { }

  ngOnInit() {
  }

}

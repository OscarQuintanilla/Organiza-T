import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

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
  claveCollection: any = [];
  ver: boolean = false;
  constructor() { }

  ngOnInit() {
    this.claveCollection = document.getElementsByName('Clave');
    this.claveCollection = this.claveCollection[0];
  }

  verClave() {
    if (this.ver) {
      this.claveCollection.setAttribute('type', 'password');
      this.ver = false;
    }else{
      this.claveCollection.setAttribute('type', 'text');
      this.ver = true;
    }
    
  }

}

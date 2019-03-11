import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private API_URI: "http://localhost:3000";


  constructor(
    private http: HttpClient,
    private generalService: GeneralService,
  ) { }

  obtenerAgendaSemana(){
  }

}

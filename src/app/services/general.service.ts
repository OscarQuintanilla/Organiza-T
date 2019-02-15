import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param fecha Fecha en formato JS que intenta pasarse al formato MySQL.
   */

  public convertirFecha(fecha: Date): string {

    var fechaStr = fecha.toString();
    var fechaMySQL: string = "";
    var fechaPartes: any = fechaStr.split(/[- :]/);

    switch (fechaPartes[1]) {
      case "Jan":
        fechaPartes[1] = 1;
        break;
      case "Feb":
        fechaPartes[1] = 2;
        break;
      case "Mar":
        fechaPartes[1] = 3;
        break;
      case "May":
        fechaPartes[1] = 4;
        break;
      case "Jun":
        fechaPartes[1] = 5;
        break;
      case "Jul":
        fechaPartes[1] = 6;
        break;
      case "Aug":
        fechaPartes[1] = 7;
        break;
      case "Sep":
        fechaPartes[1] = 8;
        break;
      case "Oct":
        fechaPartes[1] = 9;
        break;
      case "Nov":
        fechaPartes[1] = 10;
        break;
      case "Dec":
        fechaPartes[1] = 11;
        break;
      case "Jan":
        fechaPartes[1] = 12;
        break;

      default:
        break;
    }
    fechaMySQL = fechaPartes[3] + "-" + fechaPartes[1] + "-" + fechaPartes[2];
    return fechaMySQL;
  }

  /**
   * Genera los ID automáticamente, con el formato utilizado en la base de datos.
   * @param tipoElemento String con el nombre del tipo de elemento al que se le desea generar 
   * un ID automáticamente (evaluación, grupo, materia, perfil, tarea).
   */
  generarId(tipoElemento: string) {
    return this.http.get(`${this.API_URI}/general/${tipoElemento}`);
  }



}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {


  constructor() { }

  /**
   * 
   * @param fecha Argumento en formato JS que intenta pasarse al formato MySQL.
   */

  public convertirFecha(fecha: Date): string{

    var fechaStr = fecha.toString();
    var fechaMySQL: string = "";
    var partes: string[];

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

    console.log(fechaStr);
    fechaMySQL = fechaPartes[3] + "-" + fechaPartes[1] + "-" + fechaPartes[2];

    return fechaMySQL;
  }


}

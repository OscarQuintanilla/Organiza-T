import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService {

    public url: string;

    constructor(){
        this.url = "";
    }

    prueba(){
        return "Hola mundo desde el servicio."
    }

}
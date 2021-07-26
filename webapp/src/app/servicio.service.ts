import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Cargo} from './modelo/cargo';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  urlInsert='http://localhost:8080/empleado/api/insertarCargo';
  urlConsulta='http://localhost:8080/empleado/api/listaCargo';

  getCargo(){
    return this.http.get<Cargo[]>(this.urlConsulta);
  }

}

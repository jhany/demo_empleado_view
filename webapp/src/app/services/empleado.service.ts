import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoDto } from '../modelo/empleadoDto';
import { EmpleadoSueldoDto } from '../modelo/empleadoSueldoDto';
import { ResponseDto } from '../modelo/responseDto';
import { api } from './api';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http:HttpClient) { }

  listaEmpleado(): Observable<ResponseDto>{
    return this.http.post<ResponseDto>(api.listaEmpleado,{});
  }

  insertarEmpleado(data:EmpleadoDto):Observable<ResponseDto>{
    return this.http.post<ResponseDto>(api.insertarEmpleado,data);
  }

  actualizarEmpleado(data:EmpleadoSueldoDto):Observable<ResponseDto>{
    return this.http.post<ResponseDto>(api.actualizarEmpleado,data);
  }
}

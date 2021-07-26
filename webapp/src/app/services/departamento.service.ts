import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../modelo/departamento';
import { ResponseDto } from '../modelo/responseDto';
import { api } from "./api";

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http:HttpClient) { }

  listaDepartamento(): Observable<ResponseDto>{
    return this.http.post<ResponseDto>(api.listarDepartamento,{});
  }
}
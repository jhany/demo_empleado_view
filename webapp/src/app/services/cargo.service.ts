import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../modelo/cargo';
import { ResponseDto } from '../modelo/responseDto';
import { api } from "./api";

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http:HttpClient) { }

  listaCargo(): Observable<ResponseDto>{
    return this.http.post<ResponseDto>(api.listarCargo,{});
  }
}

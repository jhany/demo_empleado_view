import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { DepartamentoService } from "../services/departamento.service";
import { Departamento } from "../modelo/departamento";
import { Location } from "@angular/common";


@Component({
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css']
})
export class DepartamentoFormComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nombre', 'codigo'];
  dataSource: Departamento[] = [];
  clickedRows = new Set<Departamento>();
  
  constructor(private departamentoService: DepartamentoService, private location:Location, private router:Router) { }

  ngOnInit(): void {
    this.getDepartamentos();
  }

  getDepartamentos():void {
    this.departamentoService.listaDepartamento().subscribe(
      resp => {
        this.dataSource = resp.respuesta as Departamento[]
      }
    );
  }

  regresar() {
    this.location.back();
  }

}


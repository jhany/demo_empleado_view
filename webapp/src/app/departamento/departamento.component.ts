import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { DepartamentoService } from "../services/departamento.service";
import { Departamento } from "../modelo/departamento";

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nombre', 'codigo'];
  dataSource: Departamento[] = [];
  clickedRows = new Set<Departamento>();
  
  constructor(private departamentoService: DepartamentoService) { }

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

}

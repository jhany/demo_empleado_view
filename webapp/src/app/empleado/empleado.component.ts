import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../modelo/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nombre', 'departamento', 'cargo', 'sueldo', 'editar'];
  dataSource: Empleado[] = [];
  clickedRows = new Set<Empleado>();

  constructor(private empleadoService: EmpleadoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(): void {
    this.empleadoService.listaEmpleado().subscribe(
      resp => {
        this.dataSource = resp.respuesta as Empleado[]
      }
    );
  }

  editar(empleado: Empleado) {
    this.router.navigate(['empleadoEditForm'], { relativeTo: this.route, queryParams: empleado });
  }

}

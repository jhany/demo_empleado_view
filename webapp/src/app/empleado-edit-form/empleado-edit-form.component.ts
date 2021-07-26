import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
import { DepartamentoService } from "../services/departamento.service";
import { Location } from "@angular/common";

import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { EmpleadoSueldoDto } from '../modelo/empleadoSueldoDto';
import { EmpleadoService } from '../services/empleado.service';



@Component({
  templateUrl: './empleado-edit-form.component.html',
  styleUrls: ['./empleado-edit-form.component.css']
})
export class EmpleadoEditFormComponent implements OnInit {

  nombre:string = "";
  sueldo:number = 0;
  uuid:string = "";
  id:number = 0;

  profileForm = this.fb.group({
    sueldo: ['', Validators.required],
    uuid:[],
    id:[]
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder, private location: Location, private snackBar: MatSnackBar, private empleadoService: EmpleadoService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.nombre = `${params.primerNombre} ${params.primerApellido}`;
      // this.sueldo = params.sueldo;
      // this.uuid = params.uuid;
      // this.id = params.id;

      this.profileForm.patchValue({
        id: params.id,
        sueldo: params.sueldo,
        uuid:params.uuid
      })
    })
  }

  cleanForm() {
    this.profileForm.patchValue({
      sueldo: '',
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    debugger;
    this.empleadoService.actualizarEmpleado(this.profileForm.value).subscribe(
      data => {
        this.openSnackBar("Se insertó el registro","Éxito");
        this.cleanForm();
        setTimeout(() => {
          this.regresar();  
        }, 1000);
      }, error => {
        this.openSnackBar("Se produjo un error al insertar","Error");
      }
    );

  }

  regresar() {
    this.location.back();
  }

}


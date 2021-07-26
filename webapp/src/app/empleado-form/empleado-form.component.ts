import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmpleadoService } from '../services/empleado.service';



@Component({
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  profileForm = this.fb.group({
    primer_nombre: ['', Validators.required],
    segundo_nombre: ['', Validators.required],
    primer_apellido: ['', Validators.required],
    segundo_apellido: ['', Validators.required],
    sexo: ['', Validators.required],
    identificacion: ['', Validators.required],
    direccion: ['', Validators.required],
    telefono: ['', Validators.required],
    fecha_nacimiento: ['', Validators.required],
    sueldo: ['', Validators.required],
    id_departamento: ['', Validators.required],
    id_cargo: ['', Validators.required]
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder, private location: Location, private snackBar: MatSnackBar, private empleadoService: EmpleadoService) { }
  ngOnInit(): void {
  }

  cleanForm() {
    this.profileForm.patchValue({
      primer_nombre: '',
      segundo_nombre: '',
      primer_apellido: '',
      segundo_apellido: '',
      sexo: '',
      identificacion: '',
      direccion: '',
      telefono: '',
      fecha_nacimiento: '',
      sueldo: '',
      id_departamento: '',
      id_cargo: ''
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.empleadoService.insertarEmpleado(this.profileForm.value).subscribe(
      data => {
        this.openSnackBar("Se insertó el registro", "Éxito");
        this.cleanForm();
        setTimeout(() => {
          this.regresar();
        }, 1000);
      }, error => {
        this.openSnackBar("Se produjo un error al insertar", "Error");
      }
    );

  }

  regresar() {
    this.location.back();
  }

}


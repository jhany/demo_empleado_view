import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { DepartamentoService } from "../services/departamento.service";
import { Departamento } from "../modelo/departamento";
import { Location } from "@angular/common";

import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css']
})
export class DepartamentoFormComponent implements OnInit {

  profileForm = this.fb.group({
    codigo: ['', Validators.required],
    nombre: ['', Validators.required]
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder, private location: Location, private snackBar: MatSnackBar, private departamentoService: DepartamentoService) { }
  ngOnInit(): void {
  }

  cleanForm() {
    this.profileForm.patchValue({
      codigo: '',
      nombre: ''
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
    this.departamentoService.insertarDerpartamento(this.profileForm.value).subscribe(
      data => {
        this.openSnackBar("Se produjo un error al insertar","Éxito");
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


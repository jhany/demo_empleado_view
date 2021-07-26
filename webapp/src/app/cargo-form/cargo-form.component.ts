import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CargoService } from '../services/cargo.service';


@Component({
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css']
})
export class CargoFormComponent implements OnInit {

  profileForm = this.fb.group({
    codigo: ['', Validators.required],
    nombre: ['', Validators.required]
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder, private location: Location, private snackBar: MatSnackBar, private cargoService: CargoService) { }
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
    this.cargoService.insertarCargo(this.profileForm.value).subscribe(
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


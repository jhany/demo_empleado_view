import { Component, OnInit } from '@angular/core';

import { Cargo } from '../objetos/cargo';

@Component({
  selector: 'cargo-nuevo',
  templateUrl: './cargo-nuevo.component.html',
  styleUrls: ['./cargo-nuevo.component.css']
})
export class CargoNuevoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model = new Cargo(1, "Nombre", "COD");

  onSubmit() { console.log(this.model.name, this.model.name)}

}

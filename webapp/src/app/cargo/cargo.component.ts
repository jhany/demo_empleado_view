import { Component, OnInit } from '@angular/core';
import { CargoService } from "../services/cargo.service";
import { Cargo } from "../modelo/cargo";


@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nombre', 'codigo'];
  dataSource: Cargo[] = [];
  clickedRows = new Set<Cargo>();

  constructor(private cargoService: CargoService) { }


  ngOnInit(): void {
    this.getCargos();
  }

  getCargos():void {
    this.cargoService.listaCargo().subscribe(
      resp => {
        this.dataSource = resp.respuesta as Cargo[]
      }
    );
  }

}

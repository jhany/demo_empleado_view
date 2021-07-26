import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoComponent } from './departamento/departamento.component';
import { DepartamentoFormComponent } from "./departamento-form/departamento-form.component";
import { CargoComponent } from './cargo/cargo.component';
import { CargoFormComponent } from './cargo-form/cargo-form.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';

const routes: Routes = [
  {path: 'departamento', children:[
    {path: '', component: DepartamentoComponent},
    {path: 'departamentoForm', component: DepartamentoFormComponent}
  ]},
  {path: 'cargo', children:[
    {path: '', component: CargoComponent},
    {path: 'cargoForm', component: CargoFormComponent}
  ]},
  {path: 'empleado', children:[
    {path: '', component: EmpleadoComponent},
    {path: 'empleadoForm', component: EmpleadoFormComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

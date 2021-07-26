import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoNuevoComponent } from './cargo-nuevo/cargo-nuevo.component';
import { DepartamentoComponent } from './departamento/departamento.component';

const routes: Routes = [
  {path: 'departamento', component: DepartamentoComponent},
  {path: 'cargo-nuevo', component: CargoNuevoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

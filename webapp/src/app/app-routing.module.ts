import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoComponent } from './departamento/departamento.component';
import { DepartamentoFormComponent } from "./departamento-form/departamento-form.component";

const routes: Routes = [
  {path: 'departamento', children:[
    {path: '', component: DepartamentoComponent},
    {path: 'departamentoForm', component: DepartamentoFormComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

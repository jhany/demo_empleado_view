import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from "@angular/material/tabs";
import { DepartamentoFormComponent } from './departamento-form/departamento-form.component';
import { CargoComponent } from './cargo/cargo.component';
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CargoFormComponent } from './cargo-form/cargo-form.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent,
    DepartamentoFormComponent,
    CargoComponent,
    CargoFormComponent,
    EmpleadoComponent,
    EmpleadoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatTabsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

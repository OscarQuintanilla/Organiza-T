import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//forms
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { routing, appRoutingProviders } from './app.routing';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material';
import { TareasComponent } from './components/tareas/tareas.component';
import { EvaluacionesComponent } from './components/evaluaciones/evaluaciones.component';
import { MateriasComponent } from './components/materias/materias.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

//Services
import { TareasService } from './services/tareas.service';
import { HttpClient } from 'selenium-webdriver/http';
import { FormTareasComponent } from './components/tareas/form-tareas/form-tareas.component';
import { FormMateriasComponent } from './components/materias/form-materias/form-materias.component';
import { FormEvaluacionesComponent } from './components/evaluaciones/form-evaluaciones/form-evaluaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TareasComponent,
    EvaluacionesComponent,
    MateriasComponent,
    GruposComponent,
    InicioComponent,
    PerfilComponent,
    PlantillasComponent,
    FormTareasComponent,
    FormMateriasComponent,
    FormEvaluacionesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [ appRoutingProviders, TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

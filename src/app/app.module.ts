import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { routing, appRoutingProviders } from './app.routing';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material';
import { TareasComponent } from './tareas/tareas.component';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
import { MateriasComponent } from './materias/materias.component';
import { GruposComponent } from './grupos/grupos.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PlantillasComponent } from './plantillas/plantillas.component'

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }

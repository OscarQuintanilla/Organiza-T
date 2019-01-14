import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//Componentes
import { PerfilComponent } from "./components/perfil/perfil.component";
import { InicioComponent } from './components/inicio/inicio.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { MateriasComponent } from './components/materias/materias.component';
import { EvaluacionesComponent } from './components/evaluaciones/evaluaciones.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'tareas', component: TareasComponent},
    {path: 'materias', component: MateriasComponent},
    {path: 'evaluaciones', component: EvaluacionesComponent},
    {path: 'grupos', component: GruposComponent},
    {path: 'plantillas', component: PlantillasComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


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
import { FormTareasComponent } from './components/tareas/form-tareas/form-tareas.component';
import { FormMateriasComponent } from "./components/materias/form-materias/form-materias.component";
import { FormEvaluacionesComponent } from "./components/evaluaciones/form-evaluaciones/form-evaluaciones.component";

const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'tareas', component: TareasComponent},
    {path: 'materias', component: MateriasComponent},
    {path: 'evaluaciones', component: EvaluacionesComponent},
    {path: 'grupos', component: GruposComponent},
    {path: 'plantillas', component: PlantillasComponent},
    {path: 'tareas/agregar', component: FormTareasComponent},
    {path: 'tareas/editar/:id', component: FormTareasComponent},
    {path: 'materias/agregar', component: FormMateriasComponent},
    {path: 'materias/editar/:id', component: FormMateriasComponent},
    {path: 'evaluaciones/agregar', component: FormEvaluacionesComponent},
    {path: 'evaluaciones/editar/:id', component:FormEvaluacionesComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


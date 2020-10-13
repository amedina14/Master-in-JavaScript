// importacion de modulos de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { from } from 'rxjs';

// Importacion de componentes creados
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';

// Creacion y definicion de rutas.
const appRoutes: Routes = [
    {
        path: '', component: AboutComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'projects', component: ProjectsComponent
    },
    {
        path: 'create', component: CreateComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'project/:id', component: DetailComponent
    },
    {
        path: '**', component: ErrorComponent
    }
];

// exportar servicios y modulo/fichero de configuracion de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
/**
 * Para asociar una ruta a un componente y hacerla funcionar, debemos usar el router-outlet
*/
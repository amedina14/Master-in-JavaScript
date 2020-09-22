// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { ZapatillaComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent} from './cursos/cursos.component';

// Array de rutas
const appRoutes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {path:'home', component: HomeComponent},
    {path:'zapatillas', component: ZapatillaComponent},
    {path:'videojuego', component: VideojuegoComponent},
    {path:'cursos', component: CursosComponent},
    {path: '**', component: HomeComponent}
];

// Exportar el modulo del router
// Exportamos el servicio
export const appRoutingProviders: any[] = [];
// Exportamos el modulo: (deprecate) ModuleWithProviders
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

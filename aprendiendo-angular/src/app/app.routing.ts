// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { ZapatillaComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent} from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DefaultComponent } from './default/default.component';

// Array de rutas
const appRoutes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {path:'home', component: HomeComponent},
    {path:'zapatillas', component: ZapatillaComponent},
    {path:'videojuego', component: VideojuegoComponent},
    {path:'cursos', component: CursosComponent},
    {path:'cursos/:nombre/:followers', component: CursosComponent},
    //    {path:'cursos/:nombre/:apellidos', component: CursosComponent},
    {path:'externo', component: ExternoComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'default', component: DefaultComponent},
    {path: '**', component: HomeComponent} //si la ruta es errada manda a la Home
];

// Exportar el modulo del router
// Exportamos el servicio
export const appRoutingProviders: any[] = [];
// Exportamos el modulo: (deprecate) ModuleWithProviders
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

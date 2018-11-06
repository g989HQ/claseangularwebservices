import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesorComponent } from '../profesor/profesor.component';
import{VerdurasComponent} from'./verduras/verduras.component';


const appRoutes : Routes = [
    {path: '', component: ProfesorComponent}, //ruta inicial
    {path: 'verduras', component: VerdurasComponent}, 
    {path: '**', component: ProfesorComponent}, //ruta cuando falle, componente por defecto
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
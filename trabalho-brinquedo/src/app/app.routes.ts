import { Routes } from '@angular/router';
import { BrinquedoEditar } from './brinquedos/brinquedo-editar/brinquedo-editar';

export const routes: Routes = [
    { path: "brinquedos/editar", loadComponent: () => BrinquedoEditar }
];

import { Routes } from '@angular/router';
import { BrinquedoCadastrar } from './brinquedos/brinquedo-cadastrar/brinquedo-cadastrar';

export const routes: Routes = [
    { path: "brinquedos/cadastrar", loadComponent: () => BrinquedoCadastrar}
];

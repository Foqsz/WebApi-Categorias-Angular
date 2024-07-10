import { Routes } from '@angular/router';

// Meus Imports
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaEditarComponent } from './categoria-editar/categoria-editar.component';
import { CategoriaNovaComponent } from './categoria-nova/categoria-nova.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [

    { path: 'categoria-detalhe', component: CategoriaDetalheComponent, data: { title: 'Detalhe da Categoria' } },
    { path: 'categoria-editar', component: CategoriaEditarComponent, data: { title: 'Editar Categoria' } },
    { path: 'categoria-nova', component: CategoriaNovaComponent, data: { title: 'Nova Categoria' } },
    { path: 'categorias', component: CategoriasComponent, data: { title: 'Lista de Categorias' } },
    { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    { path: 'logout', component: LogoutComponent, data: { title: 'Logout' } }

];

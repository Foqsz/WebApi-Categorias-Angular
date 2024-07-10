import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Meus componentes
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaEditarComponent } from './categoria-editar/categoria-editar.component';
import { CategoriaNovaComponent } from './categoria-nova/categoria-nova.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    CategoriaDetalheComponent,
    CategoriaEditarComponent,
    CategoriaNovaComponent,
    CategoriasComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule 
  ]
})
export class AppModule { }

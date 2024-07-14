import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaNovaComponent } from './categoria-nova/categoria-nova.component';
import { CategoriaEditarComponent } from './categoria-editar/categoria-editar.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    CategoriaDetalheComponent,
    CategoriaNovaComponent,
    CategoriaEditarComponent,
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

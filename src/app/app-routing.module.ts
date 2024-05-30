import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioContactosComponent } from './pages/formulario-contactos/formulario-contactos.component';
import { ListarClienteComponent } from './pages/listar-cliente/listar-cliente.component';
import { SectionFormulariosComponent } from './pratica/componentes/section-formularios/section-formularios.component';


const routes: Routes = [

   { path: 'listar-cliente', component: ListarClienteComponent },
   {
    path: '',
    redirectTo: 'listar-cliente',
    pathMatch: 'full'
  },
   {
    path : 'formulario', component: FormularioContactosComponent
   },
  {
    path : 'section-forms', component : SectionFormulariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

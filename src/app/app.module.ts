import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PerfilContatosComponent } from './pages/perfil-contatos/perfil-contatos.component';
import { FormularioContactosComponent } from './pages/formulario-contactos/formulario-contactos.component';
import { HomeComponent } from './pages/home/home.component';
import { SeparadorComponent } from './components/separador/separador.component';
import { ContainComponent } from './components/contain/contain.component'
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SectionContactoComponent } from './components/section-contacto/section-contacto.component';
import { ListarClienteComponent } from './pages/listar-cliente/listar-cliente.component';
import { SectionCabecalhoComponent } from './pratica/paginas/section-cabecalho/section-cabecalho.component';
import { SectionSeparadorComponent } from './pratica/paginas/section-separador/section-separador.component';
import { SectionSeparadorContactoComponent } from './pratica/paginas/section-separador-contacto/section-separador-contacto.component';
import { SectionSeparadorContainerComponent } from './pratica/paginas/section-separador-container/section-separador-container.component';
import { SectionFormulariosComponent } from './pratica/componentes/section-formularios/section-formularios.component';
import { SectionLsClientesComponent } from './pratica/componentes/section-ls-clientes/section-ls-clientes.component';
import { FormsTemplateComponent } from './pratica/componentes/forms-template/forms-template.component';

@NgModule({
  declarations: [

    AppComponent,
    PerfilContatosComponent,
    FormularioContactosComponent,
    HomeComponent,
    SeparadorComponent,
    ContainComponent,
    CabecalhoComponent,
    SectionContactoComponent,
    ContactoComponent,
    ListarClienteComponent,
    SectionCabecalhoComponent,
    SectionSeparadorComponent,
    SectionSeparadorContactoComponent,
    SectionSeparadorContainerComponent,
    SectionFormulariosComponent,
    SectionLsClientesComponent,
    FormsTemplateComponent,

  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

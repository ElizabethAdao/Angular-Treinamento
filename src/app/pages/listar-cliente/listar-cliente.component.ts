import { Component, OnInit } from '@angular/core';
import { Icontactos } from 'src/app/interface/icontactos';
import { ContactosService } from 'src/app/services/contactos.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilContatosComponent } from '../perfil-contatos/perfil-contatos.component';

declare var $: any;
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  alfabeto: string[] = [];
  contatos: Icontactos[] = [];

  filtroPorTexto: string = '';


  constructor(private contactoService: ContactosService, private router : Router) { }

  ngOnInit(): void {
    this.listar();
    this.alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  }

  listar(){
    this.contactoService.obterContatos().subscribe((item) =>{
      this.contatos = item;
     });
  }
  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): Icontactos[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      // Compara os nomes sem acentuações
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    })
  }

  filtrarContatosPorLetraInicial(letra: string): Icontactos[] {
    return this.filtrarContatosPorTexto().filter(contato => {
      // Compara a letra inicial sem considerar acentuações
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(this.removerAcentos(letra).toLowerCase());
    })
  }
  trackByLetra(index: number, item: string): string {
    return item;
  }

  trackByContatoId(index: number, item: any): number {
    return item.id;
  }
  closeModal(){
    // const modalModelo = $('#formularioModal');
    //  modalModelo.modal('hide');
    // $('#formularioModal').hide();
    // this.router.navigateByUrl('/section-forms')

    const modalElement = $('#formularioModal');
    if (modalElement) {
      modalElement.modal('hide');
      this.router.navigateByUrl('/section-forms')
    }
  }
  openModal(){
    const modalElement = $('#formularioModal');
    if (modalElement) {
      modalElement.modal('show');
    }
  }
}

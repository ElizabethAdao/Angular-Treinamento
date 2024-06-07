import { Component, OnInit } from '@angular/core';
import { ICliente } from '../../model/icliente';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-section-ls-clientes',
  templateUrl: './section-ls-clientes.component.html',
  styleUrls: ['./section-ls-clientes.component.css']
})
export class SectionLsClientesComponent implements OnInit {
  filtroBuscar : string = '';
  alfabeto : string[] = [];
  onCliente : ICliente[] = [];
  constructor(private service: ContactosService) { }

  ngOnInit(): void {
    this.alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXZ".split('');
    this.onListar();
  }
  private removerAcentos(texto: string): string {
    return texto.normalize('NFC').replace(/[\u0300-\u036f]/g, '');
  }
  filtrarClientesPorTexto(): ICliente[]{
    if(!this.filtroBuscar){
     return this.onCliente;
    }
    return this.onCliente.filter(item=>{
      return this.removerAcentos(item.nome).toLocaleLowerCase().includes(this.removerAcentos(this.filtroBuscar).toLowerCase())
    })
  }
  filtroPorLetraInicial(letra: string) : ICliente[]{
    return this.filtrarClientesPorTexto().filter(cliente =>{
      return this.removerAcentos(cliente.nome).toLowerCase().startsWith(this.removerAcentos(letra).toLowerCase());
    })
  }
  onListar(){
    this.service.listarClientes().subscribe((resp)=>{
      this.onCliente = resp;
    })
  }
}

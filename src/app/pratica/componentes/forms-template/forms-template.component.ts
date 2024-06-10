import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-forms-template',
  templateUrl: './forms-template.component.html',
  styleUrls: ['./forms-template.component.css']
})
export class FormsTemplateComponent implements OnInit {
 cliente = {
  nomeCliente : '',
  telefone : '',
  email :'',
  observacoes: '',
  enderecos: [
    { rua: '', cidade: '', travessa: '' }
  ]
 }
  constructor(private serviceClientes: ContactosService ) { }

  ngOnInit(): void {
  }
  onSalvarClientes(clienteForm : NgForm){
    const novoCliente = clienteForm.value;
    this.serviceClientes.salvarClientes(novoCliente).subscribe(()=>{
      clienteForm.reset();
    })
  }

}

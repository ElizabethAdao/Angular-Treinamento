import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactosService } from 'src/app/services/contactos.service';
import { ICliente } from '../../model/icliente';
@Component({
  selector: 'app-section-formularios',
  templateUrl: './section-formularios.component.html',
  styleUrls: ['./section-formularios.component.css']
})
export class SectionFormulariosComponent implements OnInit {
  clienteForm! : FormGroup;
  lsClientes : ICliente[] = [];

  constructor(private srContactos: ContactosService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this. onInicialiazrForm();
    this.listar();
  }

  onInicialiazrForm(){
    this.clienteForm = this.fb.group({
      nome : ['', Validators.required],
      telefone : ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      observacoes : ['']
    })
    /*this.clienteForm = new FormGroup({
      nome : new FormControl(''),
      telefone :  new FormControl(''),
      email : new FormControl(''),
      observacoes :  new FormControl('')
    })*/

  }
  salvarCliente(){
    var novoCliente = this.clienteForm.value;
    this.srContactos.salvarClientes(novoCliente).subscribe(()=>{
      console.log('Cliente inserido com sucesso!');
      this.clienteForm.reset();
      this. listar();
    })
  }
  listar(){
    this.srContactos.listarClientes().subscribe((clientes)=>{
      this.lsClientes = clientes;
    })
  }
  cancelar(){
    this.clienteForm.reset();
  }
}

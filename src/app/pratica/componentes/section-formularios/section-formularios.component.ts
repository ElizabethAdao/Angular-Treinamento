import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactosService } from 'src/app/services/contactos.service';
import { ICliente } from '../../model/icliente';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-section-formularios',
  templateUrl: './section-formularios.component.html',
  styleUrls: ['./section-formularios.component.css']
})
export class SectionFormulariosComponent implements OnInit {
  clienteForm! : FormGroup;
  lsClientes : ICliente[] = [];

  constructor(private srContactos: ContactosService, private fb : FormBuilder, private routa : Router, private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this. onInicialiazrForm();
    this.listar();
    this.carregarCliente();
  }

  onInicialiazrForm(){
    this.clienteForm = this.fb.group({
      nome : ['', Validators.required],
      telefone : ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      observacoes : [''],
      enderecos: this.fb.group({
        rua : [''],
        cidade : [''],
        travesa : ['']
      })
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
    const id = this.routeActive.snapshot.paramMap.get('id');
    novoCliente.id = id ? parseInt(id) : null;
    this.srContactos.EditaSalvarCliente(novoCliente).subscribe(()=>{
      Swal.fire({
        title: "Adicionado com sucesso",
        text: "",
        icon: "success"
      });
      this.clienteForm.reset();
      this. listar();
      this.routa.navigateByUrl('/section-lista-cliente')
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
  carregarCliente(){
    const id = this.routeActive.snapshot.paramMap.get('id');
    if(id){
      this.srContactos.buscarCliente(parseInt(id)).subscribe((cliente) =>{
        this.clienteForm.patchValue(cliente)
      })
    }

  }
}

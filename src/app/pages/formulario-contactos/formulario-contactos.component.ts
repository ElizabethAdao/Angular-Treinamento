import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { ContactosService } from 'src/app/services/contactos.service';


@Component({
  selector: 'app-formulario-contactos',
  templateUrl: './formulario-contactos.component.html',
  styleUrls: ['./formulario-contactos.component.css']
})
export class FormularioContactosComponent implements OnInit {
  contactoForm!: FormGroup;

  constructor(private contacto : ContactosService, private router : Router) { }

  ngOnInit(): void {
   this.inicializarFormulario();
  }


  inicializarFormulario(){

    this.contactoForm = new FormGroup({
      nome : new FormControl('',Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    })
  }
  salvar(){
    const novoContacto = this.contactoForm.value;
    this.contacto.salvarContactos(novoContacto).subscribe(() =>{
      console.log('inserido com sucesso')
      this.cancelar();
       this.router.navigateByUrl('/listar-cliente')
    })
  }
  cancelar(){
    this.contactoForm.reset();
  }
}

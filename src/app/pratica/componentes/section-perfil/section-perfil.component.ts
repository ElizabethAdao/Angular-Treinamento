import { Component, OnInit } from '@angular/core';
import { ContactosService } from 'src/app/services/contactos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from '../../model/icliente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-section-perfil',
  templateUrl: './section-perfil.component.html',
  styleUrls: ['./section-perfil.component.css']
})
export class SectionPerfilComponent implements OnInit {
lsCliente : ICliente  = {
  id : 0,
  nome: '',
  telefone: '',
  email: '',
  observacoes :  '',
  enderecos: [
      {
          rua: '',
          cidade: '',
          travessa: ''
      }
  ]
}
onlistar : ICliente[] = [];
  constructor(private serviceCliente :  ContactosService, private routaActiva: ActivatedRoute , private navegacaoRouta: Router) { }

  ngOnInit(): void {
    const id = this.routaActiva.snapshot.paramMap.get('id');
    if(id){
      this.serviceCliente.buscarCliente(parseInt(id)).subscribe((resp) =>{
        this.lsCliente = resp;
      })
    }
  }
 eliminarClinente(id : number){

    Swal.fire({
      title: "Deseja eliminar o registo?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim"
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceCliente.excluirClinte(id).subscribe(()=>{
          Swal.fire({
            title: "Eliminado com sucesso",
            text: "",
            icon: "success"
          });
          this.navegacaoRouta.navigateByUrl('/section-lista-cliente');
          this.onListarCliente();
        })
      }
    });

 }
 onListarCliente(){
  this.serviceCliente.listarClientes().subscribe((resp) => {
    this.onlistar = resp;
  })
 }

}

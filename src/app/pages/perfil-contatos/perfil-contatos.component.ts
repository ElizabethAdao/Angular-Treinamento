import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icontactos } from 'src/app/interface/icontactos';
import { ContactosService } from 'src/app/services/contactos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-contatos',
  templateUrl: './perfil-contatos.component.html',
  styleUrls: ['./perfil-contatos.component.css']
})
export class PerfilContatosComponent implements OnInit {
  lsClientes: Icontactos = {
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: '',
    observacoes: '',
    id: 0
  };
  constructor(private contato: ContactosService, private activetRouter : ActivatedRoute, private navRouter : Router) { }

  ngOnInit(): void {
   const id =  this.activetRouter.snapshot.paramMap.get('id');
   if(id){
    this.contato.buscarId(parseInt(id)).subscribe((item)=>{
      this.lsClientes = item
    })
   }
  }

  excluir() {
    if (this.lsClientes.id) {
      Swal.fire({
        title: "Deseja excluir?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar"
      }).then((result) => {
        if (result.isConfirmed) {
          this.contato.excluir(this.lsClientes.id).subscribe(() => {
            Swal.fire({
              title: "Registo eliminado com sucesso",
              text: "",
              icon: "success"
            });
            this.navRouter.navigateByUrl('/listar-cliente')
          })
        }
      });
    }
  }

}

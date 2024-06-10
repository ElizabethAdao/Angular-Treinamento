import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from '../pratica/model/icliente';
import { Icontactos } from 'src/app/interface/icontactos';



@Injectable({
  providedIn: 'root'
})
export class ContactosService {
 API = 'http://localhost:4000/contatos';
 Url = 'http://localhost:4001/cliente'
  constructor(private http: HttpClient) { }

  obterContatos() : Observable<Icontactos[]>{
    return  this.http.get<Icontactos[]>(this.API)
  }
  salvarContactos(contacto: Icontactos){
    return this.http.post<Icontactos>(this.API, contacto)
  }
  buscarId(id: number) : Observable<Icontactos>{
    const urlId = `${this.API}/${id}`;
    return this.http.get<Icontactos>(urlId)
  }
  excluir(id: number) : Observable<Icontactos>{
    const urlId = `${this.API}/${id}`;
    return this.http.delete<Icontactos>(urlId)
  }
  editarContacto(contato :Icontactos) : Observable<Icontactos>{
    const urlId = `${this.API}/${contato.id}`;
    return this.http.put<Icontactos>(urlId, contato)
  }
  EditarOuSalvar(contato : Icontactos) : Observable<Icontactos>{
    if(contato.id == null){
      return this.salvarContactos(contato)
    }else{
      return this.editarContacto(contato)
    }
  }
  /*Service Cliente */
  listarClientes() : Observable<ICliente[]>{
    return this.http.get<ICliente[]>(this.Url)
  }
  salvarClientes(cliente : ICliente){
    return this.http.post<ICliente>(this.Url, cliente)
  }
  buscarCliente(id : number) : Observable<ICliente>{
    const tokenId = `${this.Url}/${id}`;
    return this.http.get<ICliente>(tokenId)
  }
  excluirClinte(id : number) : Observable<ICliente>{
    const tokenId = `${this.Url}/${id}`;
    return this.http.delete<ICliente>(tokenId);
  }
  editarCliente(cliente : ICliente ): Observable<ICliente>{
    const tokenId = `${this.Url}/${cliente.id}`
    return this.http.put<ICliente>(tokenId, cliente)
  }
  EditaSalvarCliente(cliente : ICliente): Observable<ICliente>{
    if(cliente.id){
      return this.editarCliente(cliente);
    }
    else{
      return this.salvarClientes(cliente)
    }

  }
}

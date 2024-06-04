import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icontactos } from '../interface/icontactos';
import { Observable } from 'rxjs';
import { ICliente } from '../pratica/model/icliente';



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
  listarClientes() : Observable<ICliente[]>{
    return this.http.get<ICliente[]>(this.Url)
  }
  salvarClientes(cliente : ICliente){
    return this.http.post<ICliente>(this.Url, cliente)
  }
}

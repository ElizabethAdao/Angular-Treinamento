import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  @Input() nome: string = '';
  @Input() telefone: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
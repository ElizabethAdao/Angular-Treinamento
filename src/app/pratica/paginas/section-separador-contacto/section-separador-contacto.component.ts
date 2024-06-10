import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-separador-contacto',
  templateUrl: './section-separador-contacto.component.html',
  styleUrls: ['./section-separador-contacto.component.css']
})
export class SectionSeparadorContactoComponent implements OnInit {
@Input() nome :  string  = '';
@Input() telefone : string = '';
@Input() id? : number;

  constructor() { }

  ngOnInit(): void {
  }

}

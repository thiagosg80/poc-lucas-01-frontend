import { Component, Input, OnChanges } from '@angular/core';
import { Identificacao } from './identificacao';

@Component({
  selector: 'app-cliente-identificacao',
  templateUrl: './cliente-identificacao.component.html',
  styleUrls: ['./cliente-identificacao.component.scss']
})
export class ClienteIdentificacaoComponent implements OnChanges {
  @Input() identificacao: Identificacao = new Identificacao;
  dataSource1: Identificacao[] = [];

  section1Columns = [
    'cnpj',
    'dataAbertura'
  ];

  section2Columns = [
    'atividadePrincipal'
  ];

  ngOnChanges(): void {
    this.dataSource1 = [this.identificacao];
  }
}

import { Component, Input, OnChanges } from '@angular/core';
import { Identificacao } from './identificacao';
import { Atividade } from './atividade';

@Component({
  selector: 'app-cliente-identificacao',
  templateUrl: './cliente-identificacao.component.html',
  styleUrls: ['./cliente-identificacao.component.scss']
})
export class ClienteIdentificacaoComponent implements OnChanges {
  @Input() identificacao: Identificacao = new Identificacao;
  dataSource1: Identificacao[] = [];
  dataSource2: Atividade[] = [];

  section1Columns = [
    'cnpj',
    'dataAbertura'
  ];

  section2Columns = [
    'cnae',
    'descricao'
  ];

  ngOnChanges(): void {
    this.dataSource1 = [this.identificacao];
    this.dataSource2 = this.identificacao.atividadesSecundarias;
  }
}

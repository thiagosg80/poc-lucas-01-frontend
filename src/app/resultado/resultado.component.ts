import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Enquadramento } from '../enquadramento/enquadramento';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnChanges {
  @Input() input: Enquadramento = new Enquadramento();
  enquadramentoDescricaoDisplay?: string = '';

  enquadramentosDescricoes = [
    {mapping: 'sub-desenvolvido', display: 'SUB-DESENVOLVIDO'},
    {mapping: 'em desenvolvimento', display: 'EM DESENVOLVIMENTO'},
    {mapping: 'desenvolvido', display: 'DESENVOLVIDO'}
  ];

  ngOnChanges(): void {
    const MAPPING = this.enquadramentosDescricoes.find(item => item.mapping == this.input.descricao);
    this.enquadramentoDescricaoDisplay = MAPPING?.display;
  }
}

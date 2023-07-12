import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Lucro } from 'src/app/analise/lucro';

@Component({
  selector: 'app-lucro-common-table',
  templateUrl: './lucro-common-table.component.html'
})
export class LucroCommonTableComponent {
  @Input() dataSource: Lucro[] = [];

  lucroDisplayedColumns = [
    'irpj',
    'adicionalIRPJ',
    'csll',
    'pis',
    'cofins',
    'icms',
    'inss'
  ];
}

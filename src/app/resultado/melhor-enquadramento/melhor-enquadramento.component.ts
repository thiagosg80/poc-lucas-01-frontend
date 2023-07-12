import { Component, Input, OnChanges } from '@angular/core';
import { Analise } from 'src/app/analise/analise';

@Component({
  selector: 'app-melhor-enquadramento',
  templateUrl: './melhor-enquadramento.component.html',
  styleUrls: ['./melhor-enquadramento.component.scss']
})
export class MelhorEnquadramentoComponent implements OnChanges {
  @Input() analise: Analise = new Analise;
  enquadramentos: any = [];

  ngOnChanges(): void {
    this.enquadramentos = [];
    const PERCENTUAL_SIMPLES = this.analise.simplesNacional.percentualDosTributos;
    this.enquadramentos.push(this.getEnquadramento('Simples Nacional', PERCENTUAL_SIMPLES));
    const PERCENTUAL_PRESUMIDO = this.analise.lucroPresumido.percentualDosTributos;
    this.enquadramentos.push(this.getEnquadramento('Lucro Presumido', PERCENTUAL_PRESUMIDO));
    const PERCENTUAL_REAL = this.analise.lucroReal.percentualDosTributos;
    this.enquadramentos.push(this.getEnquadramento('Lucro Real', PERCENTUAL_REAL));
    this.enquadramentos.sort((a: any, b: any) => a.percentual < b.percentual ? -1 : 1);
  }

  private getEnquadramento(label: string, percentual: number): any {
    return {label: label, percentual: percentual};
  }
}

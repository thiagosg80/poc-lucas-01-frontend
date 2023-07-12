import { Component, Input, OnChanges } from '@angular/core';
import { Analise } from '../analise/analise';
import { SimplesNacional } from '../analise/simples-nacional';
import { LucroPresumido } from '../analise/lucro-presumido';
import { LucroReal } from '../analise/lucro-real';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnChanges {
  @Input() input: Analise = new Analise();
  simplesNacionalDataSource: SimplesNacional[] = [];
  lucroPresumidoDataSource: LucroPresumido[] = [];
  lucroRealDataSource: LucroReal[] = [];
  simplesNacionalCargaTributariaAnual = 0;
  lucroPresumidoCargaTributariaAnual = 0;
  lucroRealCargaTributariaAnual = 0;

  simplesNacionalDisplayedColumns = [
    'aliquota',
    'aPagarNoPeriodo',
    'inss',
    'percentualDosTributos'
  ];

  lucroPresumidoDisplayedColumns = [
    'presuncaoIRPJmontante',
    'presuncaoIRPJaliquota',
    'presuncaoCSLLmontante',
    'presuncaoCSLLaliquota'
  ];

  lucroPresumidoDisplayedColumns02 = [
    'percentualDosTributos'
  ];

  lucroRealDisplayedColumns = [
    'apurado',
    'percentualDosTributos'
  ];

  ngOnChanges(): void {
    this.simplesNacionalCargaTributariaAnual = this.input.simplesNacional.cargaTributariaAnual;
    this.simplesNacionalDataSource = this.getSimplesNacionalDataSource(this.input.simplesNacional);
    this.lucroPresumidoCargaTributariaAnual = this.input.lucroPresumido.cargaTributariaAnual;
    this.lucroPresumidoDataSource = this.getLucroPresumidoDataSource(this.input.lucroPresumido);
    this.lucroRealCargaTributariaAnual = this.input.lucroReal.cargaTributariaAnual;
    this.lucroRealDataSource = this.getLucroRealDataSource(this.input.lucroReal);
  }

  private getSimplesNacionalDataSource(input: SimplesNacional): SimplesNacional[] {
    input.aliquota = this.getDecimal(input.aliquota * 100);
    input.percentualDosTributos = this.getDecimal(input.percentualDosTributos * 100);

    return [input];
  }

  private getLucroPresumidoDataSource(input: LucroPresumido): LucroPresumido[] {
    input.presuncaoIRPJ.aliquota = this.getDecimal(input.presuncaoIRPJ.aliquota * 100);
    input.presuncaoCSLL.aliquota = this.getDecimal(input.presuncaoCSLL.aliquota * 100);
    input.percentualDosTributos = this.getDecimal(input.percentualDosTributos * 100);

    return [input];
  }

  private getLucroRealDataSource(input: LucroReal): LucroReal[] {
    input.percentualDosTributos = this.getDecimal(input.percentualDosTributos * 100);

    return [input];
  }

  private getDecimal(value: number): number {
    return Number.parseFloat(value.toFixed(2));
  }
}

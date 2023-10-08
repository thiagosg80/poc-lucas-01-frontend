import { Component, Input, OnChanges } from '@angular/core';
import { Analise } from '../analise/analise';
import { LucroPresumido } from '../analise/lucro-presumido';
import { LucroReal } from '../analise/lucro-real';
import { SimplesNacionalEncaixe } from '../analise/simples-nacional-encaixe';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnChanges {
  @Input() input: Analise = new Analise();
  simplesNacionalDataSource: SimplesNacionalEncaixe[] = [];
  lucroPresumidoDataSource: LucroPresumido[] = [];
  lucroRealDataSource: LucroReal[] = [];
  simplesNacionalCargaTributariaAnual = 0;
  lucroPresumidoCargaTributariaAnual = 0;
  lucroRealCargaTributariaAnual = 0;

  simplesNacionalDisplayedColumns = [
    'cnae',
    'atividadeDescricao',
    'anexo',
    'faixaDescricao',
    'aliquota',
    'valorADeduzir'
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
    this.simplesNacionalDataSource = this.input.simplesNacional.encaixes;
    this.lucroPresumidoCargaTributariaAnual = this.input.lucroPresumido.cargaTributariaAnual;
    this.lucroPresumidoDataSource = this.getLucroPresumidoDataSource(this.input.lucroPresumido);
    this.lucroRealCargaTributariaAnual = this.input.lucroReal.cargaTributariaAnual;
    this.lucroRealDataSource = this.getLucroRealDataSource(this.input.lucroReal);
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

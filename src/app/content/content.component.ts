import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { InputAnalise } from '../analise/input-analise';
import { ArquivoDado } from '../arquivo/arquivo-dado';
import { Identificacao } from '../cliente-identificacao/identificacao';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  faturamentoPeriodo = '';
  salarios = '';
  proLabores = '';
  vendas = '';
  valorMedioCreditoICMS = '';
  valorMedioCreditoPIS = '';
  valorMedioCreditoCOFINS = '';
  comprasMP = '';
  despesaComFolha = '';
  outrasDespesas = '';
  impostos = '';
  lucroApurado = '';
  isRequesting = false;
  requestResult: any = {};
  wantFillManual: boolean = false;
  inputResult: InputAnalise = new InputAnalise;
  identificacao: Identificacao = new Identificacao;
  additionalDataQuantity: number = 0;
  hasAdditionalData = false;
  hasSomeIdentification = false;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  analisar(): void {
    const pathFragments = [
      environment.apiDomain,
      'analises?',
      `faturamento-periodo=${this.getHandleComma(this.faturamentoPeriodo)}`,
      `&valor-salarios=${this.getHandleComma(this.salarios)}`,
      `&valor-pro-labore=${this.getHandleComma(this.proLabores)}`,
      `&valor-medio-credito-icms=${this.getHandleComma(this.valorMedioCreditoICMS)}`,
      `&valor-medio-credito-pis=${this.getHandleComma(this.valorMedioCreditoPIS)}`,
      `&valor-medio-credito-cofins=${this.getHandleComma(this.valorMedioCreditoCOFINS)}`,
      `&lucro-apurado=${this.getHandleComma(this.lucroApurado)}`
    ];

    const url: string = pathFragments.join('');
    this.isRequesting = true;

    this.http.get<any>(url).subscribe({
      next: resp => this.successCallback(resp),
      error: () => this.errorCallback()
    });
  }

  private getHandleComma(target: any): string {
    return new String(target).replace(',', '.');
  }

  successCallback(resp: any) {
    this.requestResult = resp;
    this.isRequesting = false;
  }

  errorCallback() {
    this.snackBar.open('Ocorreu um erro ao enquadrar.', 'Fechar');
    this.isRequesting = false;
    this.requestResult = {};
  }

  setFaturamentoPeriodo(input: string): void {
    this.faturamentoPeriodo = input;
    this.requestResult = {};
  }

  setSalarios(input: string): void {
    this.salarios = input;
    this.requestResult = {};
  }

  setProLabores(input: string): void {
    this.proLabores = input;
    this.requestResult = {};
  }

  setValorMedioCreditoICMS(input: string): void {
    this.valorMedioCreditoICMS = input;
    this.requestResult = {};
  }

  setValorMedioCreditoPIS(input: string): void {
    this.valorMedioCreditoPIS = input;
    this.requestResult = {};
  }

  setValorMedioCreditoCOFINS(input: string): void {
    this.valorMedioCreditoCOFINS = input;
    this.requestResult = {};
  }

  setVendas(input: string): void {
    this.vendas = input;
    this.requestResult = {};
    this.setLucroApurado();
  }

  setComprasMP(input: string): void {
    this.comprasMP = input;
    this.requestResult = {};
    this.setLucroApurado();
  }

  setDespesaComFolha(input: string): void {
    this.despesaComFolha = input;
    this.requestResult = {};
    this.setLucroApurado();
  }

  setOutrasDespesas(input: string): void {
    this.outrasDespesas = input;
    this.requestResult = {};
    this.setLucroApurado();
  }

  setImpostos(input: string): void {
    this.impostos = input;
    this.requestResult = {};
    this.setLucroApurado();
  }

  hasEmptyField(): boolean {
    const mandatory = [
      this.faturamentoPeriodo,
      this.proLabores
    ];

    return mandatory.some(m => m.length == 0 || m == '0');
  }

  setWantFillManual(input: boolean): void {
    this.wantFillManual = input;
  }

  setArquivoDadoResult(arquivoDadoParam: ArquivoDado): void {
    this.inputResult = arquivoDadoParam.inputAnalise;
    const ADDITIONAL_DATAS_VALUES = this.getAdditionalDatas(this.inputResult);
    this.hasAdditionalData = ADDITIONAL_DATAS_VALUES.some(data => data > 0);
    this.additionalDataQuantity = ADDITIONAL_DATAS_VALUES.filter(data => data > 0).length;
    this.identificacao = arquivoDadoParam.identificacao;
    this.lucroApurado = this.inputResult.lucroApurado.toString().replace('.', ',');

    const IDENTIFICACAO_FIELDS = [
      this.identificacao.cnpj,
      this.identificacao.nomeFantasia,
      this.identificacao.atividadePrincipal,
      this.identificacao.dataAbertura
    ];

    this.hasSomeIdentification = IDENTIFICACAO_FIELDS.some(f => f);
  }

  private getAdditionalDatas(inputResult: InputAnalise): number[] {
    return [
      inputResult.valorMedioCreditoICMS,
      inputResult.valorMedioCreditoPIS,
      inputResult.valorMedioCreditoCOFINS,
      inputResult.comprasMP,
      inputResult.despesaComFolha,
      inputResult.outrasDespesas,
      inputResult.impostos,
      inputResult.lucroApurado
    ];
  }

  private setLucroApurado(): void {
    const VENDAS = this.getCommonValue(this.vendas);
    const COMPRAS_MP = this.getCommonValue(this.comprasMP);
    const DESPESA_COM_FOLHA = this.getCommonValue(this.despesaComFolha);
    const OUTRAS_DESPESAS = this.getCommonValue(this.outrasDespesas);
    const IMPOSTOS = this.getCommonValue(this.impostos);
    const LUCRO_APURADO = VENDAS - COMPRAS_MP - DESPESA_COM_FOLHA - OUTRAS_DESPESAS - IMPOSTOS;
    this.lucroApurado = LUCRO_APURADO.toString().replaceAll(',', '').replace('.', ',');
  }

  private getCommonValue(target: string): number {
    return Number(target);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

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
  isRequesting = false;
  requestResult: any = {};

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  analisar(): void {
    const pathFragments = [
      environment.apiDomain,
      'analises?',
      `faturamento-periodo=${this.faturamentoPeriodo}`,
      `&valor-salarios=${this.salarios}`,
      `&valor-pro-labore=${this.proLabores}`,
      `&vendas=${this.vendas}`,
      `&valor-medio-credito-icms=${this.valorMedioCreditoICMS}`,
      `&valor-medio-credito-pis=${this.valorMedioCreditoPIS}`,
      `&valor-medio-credito-cofins=${this.valorMedioCreditoCOFINS}`,
      `&compras-mp=${this.comprasMP}`,
      `&despesa-com-folha=${this.despesaComFolha}`,
      `&outras-despesas=${this.outrasDespesas}`,
      `&impostos=${this.impostos}`
    ];

    const url: string = pathFragments.join('');
    this.isRequesting = true;

    this.http.get<any>(url).subscribe({
      next: resp => this.successCallback(resp),
      error: () => this.errorCallback()
    });
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
  }

  setComprasMP(input: string): void {
    this.comprasMP = input;
    this.requestResult = {};
  }

  setDespesaComFolha(input: string): void {
    this.despesaComFolha = input;
    this.requestResult = {};
  }

  setOutrasDespesas(input: string): void {
    this.outrasDespesas = input;
    this.requestResult = {};
  }

  setImpostos(input: string): void {
    this.impostos = input;
    this.requestResult = {};
  }

  hasEmptyField(): boolean {
    const mandatory = [
      this.faturamentoPeriodo,
      this.salarios,
      this.proLabores,
      this.vendas
    ];

    return mandatory.some(m => m.length == 0);
  }
}

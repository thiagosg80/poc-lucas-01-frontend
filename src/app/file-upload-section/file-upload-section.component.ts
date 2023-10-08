import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { InputAnalise } from '../analise/input-analise';
import { ArquivoDado } from '../arquivo/arquivo-dado';
import { Identificacao } from '../cliente-identificacao/identificacao';

@Component({
  selector: 'app-file-upload-section',
  templateUrl: './file-upload-section.component.html',
  styleUrls: ['./file-upload-section.component.scss']
})
export class FileUploadSectionComponent {
  files: File[] = [];
  isRequesting: boolean = false;
  doneRequests: number = 0;
  inputAnalise: InputAnalise = new InputAnalise;
  identificacao: Identificacao = new Identificacao;
  arquivoDado: ArquivoDado = new ArquivoDado;
  @Output() openFields: EventEmitter<boolean> = new EventEmitter<boolean>;
  @Output() arquivoDadoResult: EventEmitter<ArquivoDado> = new EventEmitter<ArquivoDado>;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  setFiles(input: File[]): void {
    this.files = input;
  }

  send(): void {
    this.doneRequests = 0;
    this.isRequesting = true;
    this.inputAnalise = new InputAnalise;
    this.identificacao = new Identificacao;
    const URL: string = environment.apiDomain + 'arquivos/upload'

    this.files.forEach(f => {
      const FORM_DATA = new FormData;
      FORM_DATA.append('file', f);

      this.http.post(URL, FORM_DATA).subscribe({
        next: response => this.processSuccess(response),
        error: () => this.processError()
      });
    });
  }

  private processSuccess(response: any): void {
    this.processFields(response);
    this.processCommon();
    if (!this.isRequesting) {
      this.openFields.emit(true);
      this.arquivoDadoResult.emit(this.arquivoDado);
    }
  }

  private processFields(response: any): void {
    const INPUT_ANALISE_RESPONSE = response.input_analise;
    this.inputAnalise.faturamentoPeriodo = INPUT_ANALISE_RESPONSE.faturamento_periodo ||
    this.inputAnalise.faturamentoPeriodo;

    this.inputAnalise.salariosValor = INPUT_ANALISE_RESPONSE.salarios || this.inputAnalise.salariosValor;
    this.inputAnalise.proLaboreValor = INPUT_ANALISE_RESPONSE.pro_labores || this.inputAnalise.proLaboreValor;
    this.inputAnalise.vendas = INPUT_ANALISE_RESPONSE.vendas || this.inputAnalise.vendas;

    this.inputAnalise.valorMedioCreditoICMS = INPUT_ANALISE_RESPONSE.valor_medio_credito_icms ||
    this.inputAnalise.valorMedioCreditoICMS;

    this.inputAnalise.valorMedioCreditoPIS = INPUT_ANALISE_RESPONSE.valor_medio_credito_pis ||
    this.inputAnalise.valorMedioCreditoPIS;

    this.inputAnalise.valorMedioCreditoCOFINS = INPUT_ANALISE_RESPONSE.valor_medio_credito_cofins ||
    this.inputAnalise.valorMedioCreditoCOFINS;

    this.inputAnalise.comprasMP = INPUT_ANALISE_RESPONSE.compras_mp || this.inputAnalise.comprasMP;
    this.inputAnalise.despesaComFolha = INPUT_ANALISE_RESPONSE.despesa_com_folha || this.inputAnalise.despesaComFolha;
    this.inputAnalise.outrasDespesas = INPUT_ANALISE_RESPONSE.outras_despesas || this.inputAnalise.outrasDespesas;
    this.inputAnalise.impostos = INPUT_ANALISE_RESPONSE.impostos || this.inputAnalise.impostos;
    this.inputAnalise.lucroApurado = INPUT_ANALISE_RESPONSE.lucro_apurado || this.inputAnalise.lucroApurado;
    this.arquivoDado.inputAnalise = this.inputAnalise;
    const IDENTIFICACAO_RESPONSE = response.identificacao;
    this.identificacao.cnpj = IDENTIFICACAO_RESPONSE.cnpj || this.identificacao.cnpj;
    this.identificacao.nomeFantasia = IDENTIFICACAO_RESPONSE.nome_fantasia || this.identificacao.nomeFantasia;

    this.identificacao.atividadePrincipal = IDENTIFICACAO_RESPONSE.atividade_principal ||
    this.identificacao.atividadePrincipal;

    this.identificacao.atividadesSecundarias = IDENTIFICACAO_RESPONSE.atividades_secundarias ||
    this.identificacao.atividadesSecundarias;

    this.identificacao.dataAbertura = IDENTIFICACAO_RESPONSE.data_abertura || this.identificacao.dataAbertura;
    this.arquivoDado.identificacao = this.identificacao;
  }

  private processError(): void {
    this.processCommon();
    this.snackBar.open('Ocorreu um erro ao enviar os arquivos.', 'Fechar');
  }

  private processCommon(): void {
    this.doneRequests++;
    this.isRequesting = this.doneRequests < this.files.length;
  }

  hasFiles(): boolean {
    return this.files.length > 0;
  }

  setWantFillManual(): void {
    this.openFields.emit(true);
  }
}

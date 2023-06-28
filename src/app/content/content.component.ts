import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  iDH = '';
  pIB = '';
  rendaPerCapita= '';
  isRequesting = false;
  requestResult: any = {};

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  enquadrar(): void {
    const path: string = 'http://localhost:5000/enquadramentos/enquadrar?';
    const url: string = `${path}pib=${this.pIB}&idh=${this.iDH}&rp=${this.rendaPerCapita}`;
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

  setIDH(input: string): void {
    this.iDH = input;
    this.requestResult = {};
  }

  setPIB(input: string): void {
    this.pIB = input;
    this.requestResult = {};
  }

  setRendaPerCapita(input: string): void {
    this.rendaPerCapita = input;
    this.requestResult = {};
  }

  hasEmptyField(): boolean {
    return this.iDH.length == 0 || this.pIB.length == 0 || this.rendaPerCapita.length == 0;
  }
}

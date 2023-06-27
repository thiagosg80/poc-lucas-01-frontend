import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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

  constructor(private http: HttpClient) {}

  enquadrar(): void {
    const path: string = 'http://localhost:5000/enquadramentos/enquadrar?';
    const url: string = `${path}pib=${this.pIB}&idh=${this.iDH}&rp=${this.rendaPerCapita}`;

    this.isRequesting = true;
    this.http.get<any>(url).subscribe(resp => {
      this.isRequesting = false;
      this.requestResult = resp;
    });
  }

  setIDH(input: string): void {
    this.iDH = input;
  }

  setPIB(input: string): void {
    this.pIB = input;
  }

  setRendaPerCapita(input: string): void {
    this.rendaPerCapita = input;
  }
}

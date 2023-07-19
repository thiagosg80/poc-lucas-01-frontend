import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared-modules/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultadoComponent } from './resultado/resultado.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { LucroCommonTableComponent } from './resultado/lucro-common-table/lucro-common-table.component';
import { MelhorEnquadramentoComponent } from './resultado/melhor-enquadramento/melhor-enquadramento.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadSectionComponent } from './file-upload-section/file-upload-section.component';
import { ClienteIdentificacaoComponent } from './cliente-identificacao/cliente-identificacao.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContentComponent,
    InputFieldComponent,
    ResultadoComponent,
    LucroCommonTableComponent,
    MelhorEnquadramentoComponent,
    FileUploadComponent,
    FileUploadSectionComponent,
    ClienteIdentificacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask(),
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

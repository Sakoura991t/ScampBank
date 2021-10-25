import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

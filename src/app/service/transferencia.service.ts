import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from 'src/models/transferencia.models';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  listaTransferencia: any[] = [];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
   }

  get transferencia(){
    return this.listaTransferencia;
}
  todas() {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia) {
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia:any) {
    transferencia.data = new Date();
  }


}

import { Transferencia } from 'src/models/transferencia.models';
import { TransferenciaService } from './../service/transferencia.service';
import { Component, OnInit ,  EventEmitter, Output  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService,
              private router: Router) { }

  ngOnInit(): void {
  }
  
  transferir(){
    console.log('Solicitada nova transferencia');
    
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}

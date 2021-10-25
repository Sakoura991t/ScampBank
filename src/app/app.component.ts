import { TransferenciaService } from './service/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scampbank';

  constructor(private service: TransferenciaService){
  }
}

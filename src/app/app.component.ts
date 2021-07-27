import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scampbank';
  transferencias: any [] = [] ;
  

  transferir($event: any) {
    console.log($event)
    this.transferencias.push($event); 
    
  }

}

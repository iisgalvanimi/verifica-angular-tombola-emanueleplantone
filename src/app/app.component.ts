import { Component,Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Empty-Project';
  testo:string=""
  testo_casella:string=""

  onClick(){
    console.log("Ciao Mondo")
    this.testo=this.testo_casella
  }



}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isGanhador: boolean;

  public finalizaJogo(evento): void{
    this.isGanhador = evento;
  }
  
  public reiniciarJogo(): void{
    this.isGanhador = undefined;
  }

}

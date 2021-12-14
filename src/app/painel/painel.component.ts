import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FRASES } from '../shared/frase.const';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public resposta: string = '';

  private rodada: number = 0;
  
  public fraseRodada: string = FRASES[this.rodada].fraseEng;

  public tentativas: number = 3;

  public progresso: number = 0;

  @Output() public isGanhador: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public atualizaResposta(evento): void{
    this.resposta = evento.target.value;
  }

  public verificarResposta(): void{
    this.resposta = this.equalizarFrase(this.resposta);
    let frasePtBr = this.equalizarFrase(FRASES[this.rodada].frasePtBr);

    if(this.resposta == frasePtBr){
      this.rodada++;
      this.resposta = '';
      this.progresso += 100/FRASES.length;
      if(this.rodada == 4){
        this.isGanhador.emit(true);
        return;
      }
      this.fraseRodada = FRASES[this.rodada].fraseEng;
    }
    else{
      this.tentativas--;

      if(this.tentativas < 0){
        this.isGanhador.emit(false);
      }

    }

  }

  private equalizarFrase(frase: string): string{
    return frase.toLowerCase().trim();
  }

}

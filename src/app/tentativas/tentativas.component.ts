import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracoes: Coracao[] = [new Coracao(true), new Coracao(true), new Coracao(true)];

  @Input() public vidas: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let indice = this.coracoes.length - this.vidas - 1;
    
    this.atualizaCoracoes(indice);
  }

  ngOnInit() {
  }

  public atualizaCoracoes(indice: number): void{
    if(indice >= 0){
      this.coracoes[indice].preenchido = false;
    }
  }

}

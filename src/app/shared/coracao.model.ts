export class Coracao{

     public static coracaoCheio: string = '../../assets/coracao_cheio.png';
     public static coracaoVazio: string = '../../assets/coracao_vazio.png';

     constructor( public preenchido: boolean ){}

     public verificaSePreenchido(): string{
          if(this.preenchido){
              return Coracao.coracaoCheio; 
          }
          else{
               return Coracao.coracaoVazio;
          }
     }

}
import { Component, OnInit, } from "@angular/core";
import {FormsModule} from "@angular/forms";
import { AuthService } from "./auth.service";
import { Usuario } from "./usuario";

@Component({
selector: 'login',
styleUrls: ['./styles/styles.scss'],
templateUrl: './login.html'})

export class Login implements OnInit
{
//#region
  /*url : string = 'Teste';
  valorAtual : string = '';


  getValor(){
    return 1+1;
  }

  botaoClique(){
    alert("TESTE DE FUNJÇÂO DO BOTÂO");
  }

  onKeyUp(evento : KeyboardEvent){
    //Para pegar o valor de uma variavel atravéz de um evento HTML
   //console.log((<HTMLInputElement>evento.target).value);
   this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
valorSalvo : string;
  salvarValor(valor){
  console.log(valor);
  this.valorSalvo = valor.value;
  }

isMouseOver : boolean = false;
nome : string = 'AABBCC'

pessoa: any = {
  nome: 'def',
  idade: 20
}

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  *///#endregion

public usuario: Usuario = new Usuario();

  constructor (private authService: AuthService) {}

  ngOnInit () {}
  logar()
  {
    this.authService.logar(this.usuario);
  }
}

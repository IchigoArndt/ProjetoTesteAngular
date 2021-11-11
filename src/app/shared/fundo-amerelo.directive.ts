import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmerelo]'
})
export class FundoAmereloDirective {
//Injeção de dependencia
/*Renderer2, devido a versão do 'renderer'
ter sido descontinuada apartir da versão 4 do angular*/
  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2) {
    console.log(this._elementRef)
    /*essa linha debaixo deve ser utilizada em utimo caso, por que ela
    pode apresentar falha na segurança e atraves dessa falha
    pode ocorrer um ataque xxs(ou algo assim)*/
    //-this._elementRef.nativeElement.style.backgroundColor = 'yellow';

    /*setElementStyle esse metodo não funciona com essa nova versão e deve ser
    usado metodo setStyle o qual utiliza o mesmos paramentros*/
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow');
   }

}

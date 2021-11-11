import { Directive,
         HostListener,
         ElementRef,
         Renderer2,
         HostBinding }
from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {
/*serve para escutar quando ocorre um evento no html, em que se é utilizado
essa diretiva*/

@HostListener('mouseenter') onMouseOver()
{
  /*this._renderer.setStyle(
    this._elementRef.nativeElement,
    'background-color',
    'yellow');*/
    this.backgroundColor = 'yellow';
}

@HostListener('mouseleave') onMouseLeave()
{
  /*this._renderer.setStyle(
    this._elementRef.nativeElement,
    'background-color',
    'white');*/
    this.backgroundColor = 'white';
}

/*Pode se utilizar junto com essa propiedade HostBinding, os metodos de
Get e Set do TypeScript*/
@HostBinding('style.backgroundColor') backgroundColor: string;

  constructor
  (
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    ) { }
}

import { Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
  Input }
from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver()
  {
      this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave()
  {
      this.backgroundColor = this.defaultColor;
  }
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input('Highlight') highlightColor: string = 'yellow';

  constructor() { }

  //Tudo que estiver nesse metodo de ngOnInit,
  //vai ser executado quando o componte for inicializado
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}

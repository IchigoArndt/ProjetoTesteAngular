import { Directive,
         Input,
         TemplateRef,
        ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean){
    if(!condition)
      //para renderizar um template em uma diretiva estrutural
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    else
      this._viewContainerRef.clear();
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}

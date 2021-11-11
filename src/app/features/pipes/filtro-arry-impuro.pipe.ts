import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArryImpuro'
})
export class FiltroArryImpuroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

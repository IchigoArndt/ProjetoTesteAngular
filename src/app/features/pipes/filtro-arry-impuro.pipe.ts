import { FiltroArryPipe } from './filtro-arry.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArryImpuro',
  pure: false
})
export class FiltroArryImpuroPipe extends FiltroArryPipe {

}

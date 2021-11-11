import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArry'
})
export class FiltroArryPipe implements PipeTransform {

//PIPE Impuro e não deve ser utilizado em ambiente Real;
//Pipe puro não olha a modificações do valor passado por paramentro


  transform(value: any, args?:any): any {
    if(value.length == 0 || args === undefined)
      return value;

    let filtro = args;
    return value.filter( x => x.toLocaleLowerCase().indexOf(filtro) != -1);
  }

}

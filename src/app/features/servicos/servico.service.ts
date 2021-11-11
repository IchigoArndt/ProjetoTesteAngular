import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from "src/app/shared/log.service";

@Injectable()
export class ServicoService
{

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2','C#','Java'];

  constructor(private logService: LogService){

  }

    getCursos(){
      this.logService.consoleLog('Obtendo a lista de cursos');
      return this.cursos;
    }

    addCurso(curso:string){
      this.logService.consoleLog(`Criando um novo curso ${curso}`);
      this.cursos.push(curso);
      this.emitirCursoCriado.emit(curso);
      ServicoService.criouNovoCurso.emit(curso);
    }
}

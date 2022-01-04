import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

private alunos: any[] = [
  {id:1, nome: 'Aluno01', email: 'aluno01@email.com'},
  {id:2, nome: 'Aluno02', email: 'aluno02@email.com'},
  {id:3, nome: 'Aluno03', email: 'aluno03@email.com'},
]

getAll(){
 return this.alunos;
}

getById(id: number){
var aluno;

aluno = this.alunos.find(x => x.id == id);

return aluno;
}

  constructor() { }
}

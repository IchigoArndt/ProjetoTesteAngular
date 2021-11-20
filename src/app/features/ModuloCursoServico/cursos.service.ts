import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

getCursos(){
return [
  {id: 1, nome:"C#"},
  {id: 2, nome:"Angular"}
]
}

getCurso(id: number){
let cursos = this.getCursos();
let curso = cursos.find(x => x.id == id);
return curso;
}

  constructor() { }
}

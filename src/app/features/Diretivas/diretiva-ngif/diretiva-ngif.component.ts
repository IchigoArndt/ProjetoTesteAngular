import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Declara um Array de String
  cursos : string[] = [];
  mostrarCursos : boolean = false;

  onMostrarCursos(){
    if(this.mostrarCursos == false){
        this.mostrarCursos = true;
        console.log(this.mostrarCursos);
    }else{
        this.mostrarCursos = false;
        console.log(this.mostrarCursos);
    }
      }

}

import { Component, OnInit } from '@angular/core';

import { ServicoService } from '../servicos/servico.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-cruso.component.html',
  styleUrls: ['./criar-cruso.component.scss']
})
export class CriarCrusoComponent implements OnInit {

cursos: string[] = [];

  constructor(private cursosService: ServicoService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  onAddCurso(curso:string){
    console.log(curso);
    this.cursosService.addCurso(curso);
  }

}

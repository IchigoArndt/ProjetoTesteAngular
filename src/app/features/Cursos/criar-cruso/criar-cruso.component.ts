import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../ModuloCursoServico/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-cruso.component.html',
  styleUrls: ['./criar-cruso.component.scss']
})
export class CriarCrusoComponent implements OnInit {

cursos: any[];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
  this.cursos = this.cursosService.getCursos();
  }

}

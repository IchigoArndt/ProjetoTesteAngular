import { Component, OnInit } from '@angular/core';

import {ServicoService} from './servico.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  cursos: string[] = [];
  //cursosService: ServicoService;
  constructor(private cursosService:ServicoService)
  {
    //this.cursosService = _cursosService;
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.cursosService.emitirCursoCriado.subscribe(
      //Função Lambda
      curso => console.log("Testando" + curso)
    );
  }

}

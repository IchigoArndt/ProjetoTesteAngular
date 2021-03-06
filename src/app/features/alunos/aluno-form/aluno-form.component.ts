import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

aluno: any = {};
inscricao: Subscription;
private formMudou : boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params:any) => {
      let id = params['id'];

      this.aluno = this.alunosService.getById(id);

      if(this.aluno == null)
      {
        return this.aluno = {};
      }

      return this.aluno;
      }
    );
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput(){
      this.formMudou = true;
      console.log('Mudou');
  }

  podeMudarRota(){
    if(this.formMudou){
      confirm('Tem certeza que deseja sair dessa página ?');
    }

    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }
}

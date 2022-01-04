import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CriarCrusoComponent } from './criar-cruso/criar-cruso.component';
import { CurosNaoEncontradoComponent } from './curos-nao-encontrado/curos-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';
import { CursosService } from '../ModuloCursoServico/cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    CursosRoutingModule
  ],
  declarations: [
    CriarCrusoComponent,
    CursoDetalheComponent,
    CurosNaoEncontradoComponent,
    ReceberCursoCriadoComponent
  ],
  providers:[
    CursosService
  ]
})
export class CursosModule { }

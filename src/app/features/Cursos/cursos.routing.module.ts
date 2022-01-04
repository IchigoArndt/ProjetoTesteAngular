import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarCrusoComponent } from "./criar-cruso/criar-cruso.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CurosNaoEncontradoComponent } from "./curos-nao-encontrado/curos-nao-encontrado.component";

const cursosRoutes: Routes = [
  {path: '', component: CriarCrusoComponent},
  {path: 'naoEncontrado', component: CurosNaoEncontradoComponent},
  {path: ':id', component: CursoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { CriarCrusoComponent } from "./features/Cursos/criar-cruso/criar-cruso.component";
import { Login } from "./features/login/login.component";
import { DiretivaNgforComponent } from "./features/Diretivas/diretiva-ngfor/diretiva-ngfor.component";
import { AuthGuard } from './features/guardas/auth.guard';
import { CursosGuard } from './features/guardas/cursos.guard';
import { AlunosGuard } from './features/guardas/alunos.guard';
//import { CursoDetalheComponent } from "./features/Cursos/curso-detalhe/curso-detalhe.component";
//import { CurosNaoEncontradoComponent } from "./features/Cursos/curos-nao-encontrado/curos-nao-encontrado.component";

const routes: Routes = [
  {path: 'cursos', loadChildren: () => import ('./features/Cursos/cursos.module').then(x => x.CursosModule),
                   canActivate: [AuthGuard],
                   canActivateChild: [CursosGuard]},
  {path: 'alunos', loadChildren: () => import ('./features/alunos/alunos.module').then(x => x.AlunosModule),
                   canActivate: [AuthGuard],
                   canActivateChild: [AlunosGuard] },
  {path: 'login', component: Login},
  {path: '', component: DiretivaNgforComponent,
  canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

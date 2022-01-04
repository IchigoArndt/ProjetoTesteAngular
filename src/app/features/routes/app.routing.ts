import { CriarCrusoComponent } from "../Cursos/criar-cruso/criar-cruso.component";
import { ModuleWithProviders } from "@angular/core";

import { Login } from "../login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { DiretivaNgforComponent } from "../Diretivas/diretiva-ngfor/diretiva-ngfor.component";
import { CursoDetalheComponent } from "../Cursos/curso-detalhe/curso-detalhe.component";
import { CurosNaoEncontradoComponent } from "../Cursos/curos-nao-encontrado/curos-nao-encontrado.component";

const APP_ROUTES: Routes = [
  {path: 'login', component: Login},
  {path: 'cursos', component: CriarCrusoComponent},
  {path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'naoEncontrado', component: CurosNaoEncontradoComponent},
  {path: '', component: DiretivaNgforComponent},
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

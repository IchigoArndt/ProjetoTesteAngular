import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Login} from './features/login/login.component';
import { FormsModule } from '@angular/forms';
import { CicloComponent } from './features/ciclo/ciclo.component';
import { DiretivaNgifComponent } from './features/Diretivas/diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './features/Diretivas/diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './features/Diretivas/diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgClassComponent } from './features/Diretivas/diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgstyleComponent } from './features/Diretivas/diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './features/operador-elvis/operador-elvis.component';
import { ExemploNgContentComponent } from './features/exemplo-ng-content/exemplo-ng-content.component';
import { FundoAmereloDirective } from './shared/fundo-amerelo.directive';
import { DiretivasCustomizadasComponent } from './features/Diretivas/diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { ServicosComponent } from './features/servicos/servicos.component';
import { ServicoService } from './features/servicos/servico.service';
//import { CriarCrusoComponent } from './features/Cursos/criar-cruso/criar-cruso.component';
//import { ReceberCursoCriadoComponent } from './features/Cursos/receber-curso-criado/receber-curso-criado.component';
import { LogService } from './shared/log.service';
import { ExemplosPipesComponent } from './features/pipes/exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './features/pipes/camel-case.pipe';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FiltroArryPipe } from './features/pipes/filtro-arry.pipe';
import { FiltroArryImpuroPipe } from './features/pipes/filtro-arry-impuro.pipe';
import 'materialize-css';
import { AuthService } from './features/login/auth.service';
import { AuthGuard } from './features/guardas/auth.guard';
import { CursosGuard } from './features/guardas/cursos.guard';
import { AlunosGuard } from './features/guardas/alunos.guard';
//import { CursosModule } from './features/Cursos/cursos.module';
//import { AlunosModule } from './features/alunos/alunos.module';
//import { routing } from './features/routes/app.routing';
//import { CursoDetalheComponent } from './features/Cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './features/ModuloCursoServico/cursos.service';
//import { CurosNaoEncontradoComponent } from './features/Cursos/curos-nao-encontrado/curos-nao-encontrado.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    Login,
    CicloComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgClassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent,
    FundoAmereloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    ServicosComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArryPipe,
    FiltroArryImpuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //CursosModule,
    //AlunosModule
    //routing
  ],
  providers: [ServicoService,
              LogService,
              {provide: LOCALE_ID,
               useValue:'pt-BR'},
               AuthService,
               AuthGuard,
               CursosGuard,
               AlunosGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

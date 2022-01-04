import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private usuarioAuthenticado: boolean = false;

mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

logar(usuario: Usuario){
  if(usuario.Nome === 'ichigoArndt' &&
     usuario.Senha === '1324'){
      this.usuarioAuthenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
     }else{
      this.usuarioAuthenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
}

usuarioEstaAuthenticado(){
  return this.usuarioAuthenticado;
}

}

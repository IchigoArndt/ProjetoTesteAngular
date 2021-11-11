import { Component, OnInit } from '@angular/core';
import { Observable,interval } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

livro: any = {
  titulo: 'A batalha do apocalipse',
  avaliacoes: 4.54321,
  numeroPaginas: 500,
  preco: 50.00,
  dataLancamento: new Date(2015,7,3),
  url: 'http://localhost:4200'
};

livros : string[] = ['Angular','C#'];

novoCurso : string = '';

  constructor() { }

  addCurso(curso){
    this.livros.push(curso);
    console.log(curso);
  }

valorAsync = new Promise((resolve,reject) => 
  setTimeout(() => resolve('Valor Assíncrono'),200)
);

valorAsync2 = interval(2000).subscribe(valor => 'Valor Assíncrono 2' );

  ngOnInit(): void {
  }

}

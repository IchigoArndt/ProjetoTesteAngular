import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurosNaoEncontradoComponent } from './curos-nao-encontrado.component';

describe('CurosNaoEncontradoComponent', () => {
  let component: CurosNaoEncontradoComponent;
  let fixture: ComponentFixture<CurosNaoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurosNaoEncontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurosNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

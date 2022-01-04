import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCrusoComponent } from './criar-cruso.component';

describe('CriarCrusoComponent', () => {
  let component: CriarCrusoComponent;
  let fixture: ComponentFixture<CriarCrusoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCrusoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCrusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

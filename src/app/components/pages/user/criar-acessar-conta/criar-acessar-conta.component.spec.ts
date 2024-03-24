import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAcessarContaComponent } from './criar-acessar-conta.component';

describe('CriarAcessarContaComponent', () => {
  let component: CriarAcessarContaComponent;
  let fixture: ComponentFixture<CriarAcessarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarAcessarContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarAcessarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

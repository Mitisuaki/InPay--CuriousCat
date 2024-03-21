import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroContaComponent } from './cadastro-conta.component';

describe('CadastroContaComponent', () => {
  let component: CadastroContaComponent;
  let fixture: ComponentFixture<CadastroContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

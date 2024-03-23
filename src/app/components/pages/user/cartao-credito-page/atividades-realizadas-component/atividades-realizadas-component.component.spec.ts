import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesRealizadasComponentComponent } from './atividades-realizadas-component.component';

describe('AtividadesRealizadasComponentComponent', () => {
  let component: AtividadesRealizadasComponentComponent;
  let fixture: ComponentFixture<AtividadesRealizadasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtividadesRealizadasComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtividadesRealizadasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

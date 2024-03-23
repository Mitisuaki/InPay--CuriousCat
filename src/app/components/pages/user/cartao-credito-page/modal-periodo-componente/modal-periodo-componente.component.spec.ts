import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPeriodoComponenteComponent } from './modal-periodo-componente.component';

describe('ModalPeriodoComponenteComponent', () => {
  let component: ModalPeriodoComponenteComponent;
  let fixture: ComponentFixture<ModalPeriodoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPeriodoComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPeriodoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

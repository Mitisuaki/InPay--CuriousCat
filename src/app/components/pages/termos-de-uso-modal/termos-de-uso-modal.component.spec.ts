import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosDeUsoModalComponent } from './termos-de-uso-modal.component';

describe('TermosDeUsoModalComponent', () => {
  let component: TermosDeUsoModalComponent;
  let fixture: ComponentFixture<TermosDeUsoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermosDeUsoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermosDeUsoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

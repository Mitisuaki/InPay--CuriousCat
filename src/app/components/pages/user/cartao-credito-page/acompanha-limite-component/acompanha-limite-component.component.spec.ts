import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhaLimiteComponentComponent } from './acompanha-limite-component.component';

describe('AcompanhaLimiteComponentComponent', () => {
  let component: AcompanhaLimiteComponentComponent;
  let fixture: ComponentFixture<AcompanhaLimiteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcompanhaLimiteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcompanhaLimiteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoCreditoComponentComponent } from './cartao-credito-component.component';

describe('CartaoCreditoComponentComponent', () => {
  let component: CartaoCreditoComponentComponent;
  let fixture: ComponentFixture<CartaoCreditoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaoCreditoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartaoCreditoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

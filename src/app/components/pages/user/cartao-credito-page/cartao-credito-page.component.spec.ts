import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoCreditoPageComponent } from './cartao-credito-page.component';

describe('CartaoCreditoPageComponent', () => {
  let component: CartaoCreditoPageComponent;
  let fixture: ComponentFixture<CartaoCreditoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaoCreditoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartaoCreditoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

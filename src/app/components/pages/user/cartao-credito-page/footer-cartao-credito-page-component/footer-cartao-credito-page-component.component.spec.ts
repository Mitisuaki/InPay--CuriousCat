import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCartaoCreditoPageComponentComponent } from './footer-cartao-credito-page-component.component';

describe('FooterCartaoCreditoPageComponentComponent', () => {
  let component: FooterCartaoCreditoPageComponentComponent;
  let fixture: ComponentFixture<FooterCartaoCreditoPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCartaoCreditoPageComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterCartaoCreditoPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

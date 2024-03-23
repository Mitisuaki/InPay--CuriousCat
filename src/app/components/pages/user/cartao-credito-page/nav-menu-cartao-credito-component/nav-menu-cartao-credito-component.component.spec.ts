import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuCartaoCreditoComponentComponent } from './nav-menu-cartao-credito-component.component';

describe('NavMenuCartaoCreditoComponentComponent', () => {
  let component: NavMenuCartaoCreditoComponentComponent;
  let fixture: ComponentFixture<NavMenuCartaoCreditoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuCartaoCreditoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavMenuCartaoCreditoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

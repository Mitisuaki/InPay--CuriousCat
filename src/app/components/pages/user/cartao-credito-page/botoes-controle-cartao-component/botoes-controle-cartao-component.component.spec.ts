import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesControleCartaoComponentComponent } from './botoes-controle-cartao-component.component';

describe('BotoesControleCartaoComponentComponent', () => {
  let component: BotoesControleCartaoComponentComponent;
  let fixture: ComponentFixture<BotoesControleCartaoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotoesControleCartaoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotoesControleCartaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

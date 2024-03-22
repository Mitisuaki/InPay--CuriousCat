import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoValoresComponentComponent } from './informacao-valores-component.component';

describe('InformacaoValoresComponentComponent', () => {
  let component: InformacaoValoresComponentComponent;
  let fixture: ComponentFixture<InformacaoValoresComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacaoValoresComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacaoValoresComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

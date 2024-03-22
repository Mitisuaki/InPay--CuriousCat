import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuvidasFaqComponentComponent } from './duvidas-faq-component.component';

describe('DuvidasFaqComponentComponent', () => {
  let component: DuvidasFaqComponentComponent;
  let fixture: ComponentFixture<DuvidasFaqComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuvidasFaqComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuvidasFaqComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

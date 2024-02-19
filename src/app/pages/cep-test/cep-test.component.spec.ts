import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEPTestComponent } from './cep-test.component';

describe('CEPTestComponent', () => {
  let component: CEPTestComponent;
  let fixture: ComponentFixture<CEPTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CEPTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CEPTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

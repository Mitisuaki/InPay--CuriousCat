import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomePageFooterComponent } from './footer.component';

describe('UserHomePageFooterComponent', () => {
  let component: UserHomePageFooterComponent;
  let fixture: ComponentFixture<UserHomePageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserHomePageFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHomePageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

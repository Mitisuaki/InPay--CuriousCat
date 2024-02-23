import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomePageHeaderComponent } from './header.component';

describe('UserHomePageHeaderComponent', () => {
  let component: UserHomePageHeaderComponent;
  let fixture: ComponentFixture<UserHomePageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserHomePageHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHomePageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

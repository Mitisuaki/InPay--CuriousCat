import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomePageMainComponent } from './main.component';

describe('MainComponent', () => {
  let component: UserHomePageMainComponent;
  let fixture: ComponentFixture<UserHomePageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserHomePageMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHomePageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

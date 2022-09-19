import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtoolComponent } from './navtool.component';

describe('NavtoolComponent', () => {
  let component: NavtoolComponent;
  let fixture: ComponentFixture<NavtoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavtoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

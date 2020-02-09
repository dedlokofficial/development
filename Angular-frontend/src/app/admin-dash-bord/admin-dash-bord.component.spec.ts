import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashBordComponent } from './admin-dash-bord.component';

describe('AdminDashBordComponent', () => {
  let component: AdminDashBordComponent;
  let fixture: ComponentFixture<AdminDashBordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashBordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

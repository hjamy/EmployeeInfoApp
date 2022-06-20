import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualEmployeeComponent } from './individual-employee.component';

describe('IndividualEmployeeComponent', () => {
  let component: IndividualEmployeeComponent;
  let fixture: ComponentFixture<IndividualEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

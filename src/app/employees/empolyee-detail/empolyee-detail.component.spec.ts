import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeDetailComponent } from './empolyee-detail.component';

describe('EmpolyeeDetailComponent', () => {
  let component: EmpolyeeDetailComponent;
  let fixture: ComponentFixture<EmpolyeeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpolyeeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpolyeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

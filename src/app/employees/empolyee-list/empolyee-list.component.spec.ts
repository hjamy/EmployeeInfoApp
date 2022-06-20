import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeListComponent } from './empolyee-list.component';

describe('EmpolyeeListComponent', () => {
  let component: EmpolyeeListComponent;
  let fixture: ComponentFixture<EmpolyeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpolyeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpolyeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

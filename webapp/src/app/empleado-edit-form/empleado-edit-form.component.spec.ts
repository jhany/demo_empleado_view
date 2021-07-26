import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoEditFormComponent } from './empleado-edit-form.component';

describe('EmpleadoEditFormComponent', () => {
  let component: EmpleadoEditFormComponent;
  let fixture: ComponentFixture<EmpleadoEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

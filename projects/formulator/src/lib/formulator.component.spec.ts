import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulatorComponent } from './formulator.component';

describe('FormulatorComponent', () => {
  let component: FormulatorComponent;
  let fixture: ComponentFixture<FormulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedFormExerciseComponent } from './typed-form-exercise.component';

describe('TypedFormExerciseComponent', () => {
  let component: TypedFormExerciseComponent;
  let fixture: ComponentFixture<TypedFormExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypedFormExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypedFormExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

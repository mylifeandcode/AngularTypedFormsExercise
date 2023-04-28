import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { TypedFormExerciseComponent } from './typed-form-exercise/typed-form-exercise.component';

const routes: Routes = [
  {
    path: 'exercise',
    component: TypedFormExerciseComponent
  },
  {
    path: '',
    component: IntroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

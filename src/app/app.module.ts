import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypedFormExerciseComponent } from './typed-form-exercise/typed-form-exercise.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    TypedFormExerciseComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

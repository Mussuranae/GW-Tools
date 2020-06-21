import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { DisplayComponent } from './characters/display/display.component';
import { FormComponent } from './characters/form/form.component';
import { DesignComponent } from './design-component/design.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FormComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

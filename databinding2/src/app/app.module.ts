import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatevariableComponent } from './templatevariable/templatevariable.component';
import { FormExampleComponent } from './form-example/form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatevariableComponent,
    FormExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

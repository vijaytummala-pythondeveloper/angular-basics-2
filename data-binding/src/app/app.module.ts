import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertybindingExampleComponent } from './propertybinding-example/propertybinding-example.component';
import { EventbindingExampleComponent } from './eventbinding-example/eventbinding-example.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingExampleComponent,
    EventbindingExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

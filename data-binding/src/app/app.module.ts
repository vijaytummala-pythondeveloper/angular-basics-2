import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertybindingExampleComponent } from './propertybinding-example/propertybinding-example.component';
import { EventbindingExampleComponent } from './eventbinding-example/eventbinding-example.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { TwowaybindingusingeventComponent } from './twowaybindingusingevent/twowaybindingusingevent.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingExampleComponent,
    EventbindingExampleComponent,
    TwowaydatabindingComponent,
    TwowaybindingusingeventComponent
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

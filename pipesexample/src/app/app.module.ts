import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EoPipe } from './eo.pipe';
import { EopipeComponent } from './eopipe/eopipe.component';
import { AddnumPipe } from './addnum.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EoPipe,
    EopipeComponent,
    AddnumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormulatorModule, InputGroupModule} from '@afsoftwarestudios/formulator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormulatorModule,
    InputGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

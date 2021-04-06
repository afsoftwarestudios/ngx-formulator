import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormulatorModule} from '@afsoftwarestudios/formulator';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormulatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

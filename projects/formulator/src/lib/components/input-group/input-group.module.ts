import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupComponent } from './input-group.component';
import {TextModule} from './input/text/text.module';



@NgModule({
  declarations: [
    InputGroupComponent
  ],
  imports: [
    CommonModule,
    TextModule
  ],
  exports: [
    InputGroupComponent
  ],
})
export class InputGroupModule { }

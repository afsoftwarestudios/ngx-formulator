import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
    declarations: [
        TextComponent
    ],
    exports: [
        TextComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class TextModule { }

import { Component } from '@angular/core';
import {simpleForm} from './form-templates/simple-form';
import {FormArray, FormGroup} from '@angular/forms';
import {XFormControl} from '@afsoftwarestudios/formulator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formulator-examples';
  form = new FormArray([]);

  constructor() {
    for (const simpleFormKey in simpleForm) {
      if (simpleForm.hasOwnProperty(simpleFormKey)) {
        this.form.push(
          new FormGroup({
            [simpleFormKey]: new XFormControl(simpleForm[simpleFormKey])
          })
        );
      }
    }
  }
}

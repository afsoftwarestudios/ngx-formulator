import { Component } from '@angular/core';
import {simpleForm} from './form-templates/simple-form';
import {XFormControl, XFormGroup} from '@afsoftwarestudios/formulator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formulator-examples';
  xFormGroup: XFormGroup;

  constructor() {
    let controls: {[name: string]: XFormControl} = {};
    for (const simpleFormKey in simpleForm) {
      if (simpleForm.hasOwnProperty(simpleFormKey)) {
        controls = {
          ...controls,
          [simpleFormKey]: new XFormControl(simpleForm[simpleFormKey])
        };
      }
    }
    this.xFormGroup = new XFormGroup(controls);
  }
}

import {XFormGroupProperties} from '../../interfaces/xform-group-properties';
import {XFormControl} from '../xform-control/xform-control';
import {FormGroup} from '@angular/forms';

export class XFormGroup extends FormGroup implements XFormGroupProperties {

  get controlsOrdered(): XFormControl[] {
    const controls: XFormControl[] = [];
    for (const controlsKey in this.controls) {
      if (this.controls.hasOwnProperty(controlsKey)) {
        controls.push(this.controls[controlsKey] as XFormControl);
      }
    }

    return controls.sort((a, b) => {
      return (a.sequenceId - b.sequenceId);
    });
  }

  constructor(
    controls: {
      [key: string]: XFormControl;
    }
  ) {
    super(controls);
  }
}

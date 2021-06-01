import {Component, Input, OnInit} from '@angular/core';
import {XFormControl} from '../../../../classes/xform-control/xform-control';
import {FormControlTypes} from '../../../../enums/form-control-types.enum';

@Component({
  selector: 'formulator-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() xFormControl: XFormControl = new XFormControl({
    formControlType: FormControlTypes.TEXT,
    sequenceId: 0,
    validatorNames: [],
    initialValue: ``
  });

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {XFormGroup} from '../../classes/xform-group/xform-group';
import {FormControlTypes} from '../../enums/form-control-types.enum';

@Component({
  selector: 'formulator-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css']
})
export class InputGroupComponent implements OnInit {

  @Input() xFormGroup = new XFormGroup({});
  formControlTypesEnum = FormControlTypes;

  constructor() { }

  ngOnInit(): void {
  }

}

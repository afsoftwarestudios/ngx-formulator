import {FormControlTypes} from '../enums/form-control-types.enum';

export interface XFormControlProperties {
  formControlType: FormControlTypes;
  initialValue: string | number| boolean| string[] | number[] | boolean[] | null;

  sequenceId: number;

  label?: string;

  validatorNames?: string[];
  validatorAsyncNames?: string[];
}

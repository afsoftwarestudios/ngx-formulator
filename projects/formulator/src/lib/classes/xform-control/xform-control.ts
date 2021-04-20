import {AsyncValidatorFn, FormControl, ValidatorFn, Validators} from '@angular/forms';
import {XFormControlProperties} from '../../interfaces/interfaces.index';
import {FormControlTypes} from '../../enums/form-control-types.enum';
import {ValidatorUtility} from '../../utilitites/utilitites.index';

export class XFormControl extends FormControl implements XFormControlProperties {

  formControlType: FormControlTypes;
  initialValue: string | number | boolean | string[] | number[] | boolean[] | null;

  constructor(
    xFormControlProperties: XFormControlProperties,
  ) {
    super(
      xFormControlProperties?.initialValue
    );

    this.formControlType = xFormControlProperties?.formControlType;
    this.initialValue = xFormControlProperties?.initialValue;

    this.initiateValidators(xFormControlProperties);
  }

  private initiateValidators(xFormControlProperties: XFormControlProperties): void {
    if (!Array.isArray(xFormControlProperties.validatorNames) && !Array.isArray(xFormControlProperties.validatorAsyncNames)) {
      return;
    }

    const validators: ValidatorFn[] = [];

    xFormControlProperties.validatorNames?.forEach(validatorName => {
      const validator = ValidatorUtility.validators.get(validatorName);
      if (validator) {
        validators.push(validator);
      } else {
        console.warn(`The validator '${validatorName}' that you are trying to use is not defined.`);
      }
    });

    this.setValidators(Validators.compose(validators));

    const validatorsAsync: AsyncValidatorFn[] = [];

    xFormControlProperties.validatorAsyncNames?.forEach(validatorName => {
      const validator = ValidatorUtility.validatorsAsync.get(validatorName);
      if (validator) {
        validatorsAsync.push(validator);
      } else {
        console.warn(`The async validator '${validatorName}' that you are trying to use is not defined.`);
      }
    });

    this.setAsyncValidators(Validators.composeAsync(validatorsAsync));
  }

}

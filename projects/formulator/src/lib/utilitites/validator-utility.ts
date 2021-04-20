import {AsyncValidatorFn, ValidatorFn, Validators} from '@angular/forms';

export class ValidatorUtility {

  static validators = new Map<string, ValidatorFn>([
    [`email`, Validators.email],
    [`required`, Validators.required],
    [`requiredTrue`, Validators.requiredTrue],
    [`nullValidator`, Validators.nullValidator],
  ]);

  static validatorsAsync = new Map<string, AsyncValidatorFn>([]);
}

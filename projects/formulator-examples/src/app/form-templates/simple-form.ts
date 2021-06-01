import {FormControlTypes, XFormControlProperties} from '@afsoftwarestudios/formulator';

export const simpleForm: { [key: string]: XFormControlProperties } = {
  firstName: {
    initialValue: ``,
    formControlType: FormControlTypes.TEXT
  },
  middleName: {
    initialValue: ``,
    formControlType: FormControlTypes.TEXT
  },
  lastName: {
    initialValue: ``,
    formControlType: FormControlTypes.TEXT
  },
};

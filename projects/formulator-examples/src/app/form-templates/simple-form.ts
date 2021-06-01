import {FormControlTypes, XFormControlProperties} from '@afsoftwarestudios/formulator';

export const simpleForm: { [key: string]: XFormControlProperties } = {
  firstName: {
    initialValue: ``,
    formControlType: FormControlTypes.TEXT,
    sequenceId: 3,
    label: `Three`
  },
  middleName: {
    initialValue: ``,
    formControlType: FormControlTypes.TEXT,
    sequenceId: 1,
    label: `One`
  },
  lastName: {
    initialValue: ``,
    formControlType: FormControlTypes.TEXT,
    sequenceId: 2,
    label: `Two`
  },
};

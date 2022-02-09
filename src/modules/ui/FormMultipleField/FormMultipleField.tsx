import * as React from 'react';

import {
  FormMultipleField,
  FormMultipleFieldLabel,
  FormMultipleFieldTextArea,
  FormMultipleFieldHelper,
} from './FormMultipleField.styles';
import { FormMultipleFieldProps as Props } from './types';

const FormMultipleFieldComponent = ({
  LabelProps,
  TextAreaProps,
  HelperProps,
  ...props
}: Props): React.ReactElement => {
  return (
    <FormMultipleField {...props}>
      <FormMultipleFieldLabel {...LabelProps} />
      <FormMultipleFieldTextArea rows={3} {...TextAreaProps} />
      {HelperProps && <FormMultipleFieldHelper {...HelperProps} />}
    </FormMultipleField>
  );
};

FormMultipleFieldComponent.defaultProps = {};

export default FormMultipleFieldComponent;

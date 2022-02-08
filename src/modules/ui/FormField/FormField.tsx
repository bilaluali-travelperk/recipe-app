import * as React from 'react';

import {
  FormField,
  FormFieldLabel,
  FormFieldInput,
  FormFieldHelper,
} from './FormField.styles';
import { FormFieldProps as Props } from './types';

const FormFieldComponent = ({
  LabelProps,
  InputProps,
  HelperProps,
  ...props
}: Props): React.ReactElement => {
  return (
    <FormField {...props}>
      <FormFieldLabel {...LabelProps} />
      <FormFieldInput {...InputProps} />
      {HelperProps && <FormFieldHelper {...HelperProps} />}
    </FormField>
  );
};

FormFieldComponent.defaultProps = {};

export default FormFieldComponent;

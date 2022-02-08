import * as React from 'react';

import { Form, FormSubmit } from './Form.styles';
import { FormProps as Props } from './types';

const FormComponent = ({
  SubmitProps,
  ...props
}: Props): React.ReactElement => (
  <React.Fragment>
    <Form {...props} />
    <FormSubmit {...SubmitProps} />
  </React.Fragment>
);

FormComponent.defaultProps = {};

export default FormComponent;

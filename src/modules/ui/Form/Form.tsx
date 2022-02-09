import * as React from 'react';

import { FormContainer, Form, FormSubmit } from './Form.styles';
import { FormProps as Props } from './types';

const FormComponent = ({
  SubmitProps,
  ...props
}: Props): React.ReactElement => (
  <FormContainer>
    <Form id="formId" {...props} />
    <FormSubmit type="submit" form="formId" {...SubmitProps}>
      Save
    </FormSubmit>
  </FormContainer>
);

FormComponent.defaultProps = {};

export default FormComponent;

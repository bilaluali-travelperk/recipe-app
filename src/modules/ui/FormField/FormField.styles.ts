import styled from 'styled-components';

import {
  FormFieldLabelProps,
  FormFieldInputProps,
  FormFieldHelperProps,
} from './types';

export const FormField = styled.div`
  display: inline-grid;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const FormFieldLabel = styled.label<FormFieldLabelProps>`
  :after {
    content: ' *';
    color: red;
  }
`;

export const FormFieldInput = styled.input<FormFieldInputProps>`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const FormFieldHelper = styled.small<FormFieldHelperProps>`
  color: ${({ theme }) => theme.colors.secondary};
`;

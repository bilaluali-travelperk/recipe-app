import styled from 'styled-components';

import {
  FormMultipleFieldLabelProps,
  FormMultipleFieldTextAreaProps,
  FormMultipleFieldHelperProps,
} from './types';

export const FormMultipleField = styled.div`
  display: inline-grid;
`;

export const FormMultipleFieldLabel = styled.label<FormMultipleFieldLabelProps>`
  :after {
    content: ' *';
    color: red;
  }
`;

export const FormMultipleFieldTextArea = styled.textarea<FormMultipleFieldTextAreaProps>`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const FormMultipleFieldHelper = styled.small<FormMultipleFieldHelperProps>`
  color: ${({ theme }) => theme.colors.secondary};
`;

import styled from 'styled-components';
import Button from '~recipe/ui/Button';

import { FormHTMLProps } from './types';

export const FormContainer = styled.div`
  display: grid;
`;

export const Form = styled.form<FormHTMLProps>``;

export const FormSubmit = styled(Button)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

import styled from 'styled-components';

import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
  color: white;
  border: 0;
  border-radius: 0.35rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  background-color: ${({ theme, variant }) => theme.colors[variant]};

  &:hover {
    border-width: 2px;
    border-style: solid;
    border-color: ${({ theme, variant }) => theme.colors[variant]};
    background-color: white;
    color: ${({ theme }) => theme.colors.text};
  }
`;

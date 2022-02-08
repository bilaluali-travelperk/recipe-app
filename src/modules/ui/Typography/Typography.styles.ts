import styled from 'styled-components';

import { TypographyProps } from './types';

export const H1 = styled.h1<TypographyProps>`
  color: ${({ theme, variant }) => theme.colors[variant]};
`;
export const H2 = styled.h2<TypographyProps>`
  color: ${({ theme, variant }) => theme.colors[variant]};
`;
export const H3 = styled.h3<TypographyProps>`
  color: ${({ theme, variant }) => theme.colors[variant]};
`;
export const H4 = styled.h4<TypographyProps>`
  color: ${({ theme, variant }) => theme.colors[variant]};
`;
export const H5 = styled.h5<TypographyProps>`
  color: ${({ theme, variant }) => theme.colors[variant]};
`;
export const H6 = styled.h6<TypographyProps>`
  color: ${({ theme, variant }) => theme.colors[variant]};
`;
export const Text = styled.p<TypographyProps>`
  color: ${({ theme, variant }) => theme.colors[variant]};
`;

export const Small = styled.small<TypographyProps>`
  color: ${({ theme, variant }) => theme.colors[variant]};
`;

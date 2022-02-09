import styled from 'styled-components';

import Button from '~recipe/ui/Button';

import { NavbarProps } from './types';

export const Navbar = styled.nav<NavbarProps>`
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  overflow: hidden;
  padding: 1.5rem 2rem 1.5rem 2rem;
  background-color: ${({ theme, variant }) => theme.colors[variant]};
`;

export const NavbarLogo = styled.div`
  color: white;
`;

export const NavbarLinks = styled.div`
  margin-left: 2rem;
`;

export const NavbarLink = styled(Button)`
  margin-left: 1rem;
`;

import * as React from 'react';
import { useNavigate } from 'react-router';

import Typography from '~recipe/ui/Typography';

import { Navbar, NavbarLogo, NavbarLinks, NavbarLink } from './Navbar.styles';
import { NavbarProps as Props } from './types';

const NavbarComponent = (props: Props): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <Navbar {...props}>
      <NavbarLogo>Recipes APP</NavbarLogo>
      <NavbarLinks>
        <NavbarLink
          variant="warning"
          onClick={React.useCallback(() => {
            navigate('/recipes');
          }, [navigate])}
        >
          Recipes
        </NavbarLink>
        <NavbarLink
          variant="success"
          onClick={React.useCallback(() => {
            navigate('/recipes/create');
          }, [navigate])}
        >
          Create Recipe
        </NavbarLink>
      </NavbarLinks>
    </Navbar>
  );
};

NavbarComponent.defaultProps = {};

export default NavbarComponent;

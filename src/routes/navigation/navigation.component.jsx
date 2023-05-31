import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firbase.utils';

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from './navigation.styles';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={'/'}>
          <Logo />
        </LogoContainer>
        <NavLinks>
          <NavLink to={'/shop'}>Shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to={'/sign-in'}>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {cart && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;

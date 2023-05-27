import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to={'/'}>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to={'/shop'}>
            Shop
          </Link>
          <Link className='nav-link' to={'/sign-in'}>
            Sign In
          </Link>
          <Link className='nav-link' to={''}>
            Cart
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;

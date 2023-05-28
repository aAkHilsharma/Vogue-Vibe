import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { signOutUser } from '../../utils/firbase.utils';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className='nav-link' to={'/sign-in'}>
              Sign In
            </Link>
          )}
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

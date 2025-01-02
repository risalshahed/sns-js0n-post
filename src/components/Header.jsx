import { useContext } from 'react';
import logo from '../assets/icons/logo.png'
import Notification from './SVGs/Notification';
import { BellCounterContext } from '../context';
import { Link } from 'react-router-dom';

const Header = () => {
  const { bellCounter } = useContext(BellCounterContext);

  return (
    <header>
      <div>
        <Link to='/'>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className='menus'>
        <div>
          Bell Counter
          <div id='bell-count'>
            <Notification />
            <sup>
              <strong>{bellCounter}</strong>
            </sup>
          </div>
        </div>
        <div id='sign-in'>
          Sign in
        </div>
        <div id='register'>
          Register
        </div>
      </div>
    </header>
  );
}

export default Header;

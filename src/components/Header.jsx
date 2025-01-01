import logo from '../assets/icons/logo.png'
import Notification from './SVGs/Notification';

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className='menus'>
        <div>
          Bell Counter
          <div id='bell-count'>
            <Notification />
            <sup>
              <strong>6</strong>
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

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {
  BusinessCenterOutlined,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../configs/firebase';
import { selectUser } from '../features/userSlice';
import './Header.css';
import HeaderOption from './HeaderOption';

function Header() {
  const [open, setOpen] = useState(false);
  const [user] = useSelector(selectUser);
  function handleOpen() {
    setOpen((prev) => !prev);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <div className={'header'}>
      <div className="header__left">
        <img
          src={'https://img.icons8.com/color/2x/linkedin.png'}
          alt={'linkedin_logo'}
        />
        <div className={'header__search'}>
          <Search />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title={'Home'} />
        <HeaderOption Icon={SupervisorAccount} title={'My Network'} />
        <HeaderOption Icon={BusinessCenterOutlined} title={'Jobs'} />
        <HeaderOption Icon={Chat} title={'Messaging'} />
        <HeaderOption Icon={Notifications} title={'Notification'} />
        <ClickAwayListener onClickAway={handleClose}>
          <div className={'header__logout'}>
            <HeaderOption
              avatar={user.displayName}
              title={'me'}
              onClick={handleOpen}
            />
            {open ? (
              <div className={'header__logoutOption'}>
                <button>Profile</button>
                <button onClick={() => auth.signOut()}>Logout</button>
              </div>
            ) : null}
          </div>
        </ClickAwayListener>
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { auth } from '../configs/firebase';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import HeaderOption from './HeaderOption';
import './LogoutOption.css';

const LogoutOption = ({ user }) => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((prev) => !prev);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className={'logoutOption'}>
        <HeaderOption
          Avatar={Avatar}
          avatarSrc={user?.photoUrl}
          title={'Me'}
          onClick={handleOpen}
        />
        {open ? (
          <div className={'logoutOption__list'}>
            <div className="logoutOption__header">
              <div>
                <Avatar
                  style={{ width: 50, height: 50 }}
                  src={user?.photoUrl}
                />
              </div>
              <div>
                <p>
                  <strong>{user.displayName}</strong>
                </p>
                <p className={'logoutOption__description'}>{user.email}</p>
              </div>
            </div>
            <span>View Profile</span>
            <hr />
            <div className={'logoutOption__footer'}>
              <button onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default LogoutOption;

import { Avatar } from '@material-ui/core';
import React from 'react';
import './HeaderOption.css';

function HeaderOption({ avatar, Icon, title, onClick }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className={'headerOption__icon'} onClick={onClick} />}
      {avatar && (
        <Avatar
          className={'headerOption__icon'}
          onClick={onClick}
          src={avatar}
        />
      )}
      <h3 className={'headerOption__title'}>{title}</h3>
    </div>
  );
}

export default HeaderOption;

import React from 'react';
import './HeaderOption.css';

function HeaderOption({ Avatar, avatarSrc, Icon, title, onClick }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className={'headerOption__icon'} onClick={onClick} />}
      {Avatar && (
        <Avatar
          src={avatarSrc}
          className={'headerOption__icon'}
          onClick={onClick}
        />
      )}
      <h3 className={'headerOption__title'}>{title}</h3>
    </div>
  );
}

export default HeaderOption;

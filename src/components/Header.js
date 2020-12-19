import {
  BusinessCenterOutlined,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from '@material-ui/icons';
import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';

function Header() {
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
        <HeaderOption
          avatar={
            'https://media-exp1.licdn.com/dms/image/C5603AQFaAlP-q31fRQ/profile-displayphoto-shrink_100_100/0/1608125932159?e=1613606400&v=beta&t=YxV5EKWPtPv4ep5jf3omKwfsFxDU-hBbqzO9cN_bUFE'
          }
          title={'me'}
        />
      </div>
    </div>
  );
}

export default Header;

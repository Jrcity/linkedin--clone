import {
  BusinessCenterOutlined,
  House,
  Notifications,
  Search,
  Sms,
  SupervisorAccount,
} from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Header.css';
import HeaderOption from './HeaderOption';
import LogoutOption from './LogoutOption';

function Header() {
  const user = useSelector(selectUser);

  return (
    <div className={'header'}>
      <div className="header__left">
        <img
          src={'https://img.icons8.com/color/2x/linkedin.png'}
          alt={'linkedin_logo'}
        />
        <div className={'header__search'}>
          <Search />
          <input placeholder={'Search'} type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={House} title={'Home'} />
        <HeaderOption Icon={SupervisorAccount} title={'My Network'} />
        <HeaderOption Icon={BusinessCenterOutlined} title={'Jobs'} />
        <HeaderOption Icon={Sms} title={'Messaging'} />
        <HeaderOption Icon={Notifications} title={'Notification'} />
        <LogoutOption user={user} />
      </div>
    </div>
  );
}

export default Header;

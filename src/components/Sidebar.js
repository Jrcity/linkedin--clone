import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

import './Sidebar.css';

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className={'sidebar__recentItem'}>
      <span className={'sidebar__hash'}>#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className={'sidebar__top'}>
        <img
          src={
            'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
          alt={'wallpaper'}
        />
        <Avatar className={'sidebar__avatar'} src={user?.photoUrl} />
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>

      <div className={'sidebar__stats'}>
        <div className={'sidebar__stat'}>
          <p>who viewed you</p>
          <p className={'sidebar__statNumber'}>23.5k</p>
        </div>
        <div className={'sidebar__stat'}>
          <p>Videos on post</p>
          <p className={'sidebar__statNumber'}>2,455</p>
        </div>
      </div>
      <div className={'sidebar__bottom'}>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('developer')}
        {recentItem('selftaught')}
      </div>
    </div>
  );
}

export default Sidebar;

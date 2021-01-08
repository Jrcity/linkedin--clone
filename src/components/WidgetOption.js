import React from 'react';
import { Avatar } from '@material-ui/core';

import './WidgetOption.css';

const WidgetOption = ({ description, src, title, user }) => {
  return (
    <div className={'widgetOption'}>
      <h3>{title}</h3>
      <div className={'widgetOption__top'}>
        <div className={'widgetOption__left'}>
          <Avatar src={src} />
        </div>
        <div className={'widgetOption__right'}>
          <p>
            <strong>{user}</strong>
          </p>
          <p>{description}</p>
          <button className={'widgetOption__button'}>+ Follow</button>
        </div>
      </div>
    </div>
  );
};

export default WidgetOption;

import { IconButton } from '@material-ui/core';
import React from 'react';
import './InputOption.css';

const InputOption = ({ Icon, color, title, onClick }) => {
  return (
    <IconButton onClick={onClick} className={'inputOption'}>
      <div>
        {Icon && <Icon style={{ color: color }} />}
        <h4>{title}</h4>
      </div>
    </IconButton>
  );
};

export default InputOption;

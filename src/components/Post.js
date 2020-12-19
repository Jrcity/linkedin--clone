import React from 'react';
import { Avatar } from '@material-ui/core';
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbsUpDownOutlined,
} from '@material-ui/icons';
import InputOption from './InputOption';
import './Post.css';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className={'post'}>
      <div className={'post__header'}>
        <Avatar src={photoUrl} />
        <div className={'post__info'}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={'post__body'}>
        <p>{message}</p>
      </div>
      <div className={'post__bottom'}>
        <InputOption
          Icon={ThumbsUpDownOutlined}
          title={'Like'}
          color={'#999'}
        />
        <InputOption Icon={ChatOutlined} title={'Comment'} color={'#999'} />
        <InputOption Icon={ShareOutlined} title={'Share'} color={'#999'} />
        <InputOption Icon={SendOutlined} title={'Send'} color={'#999'} />
      </div>
    </div>
  );
}

export default Post;

import React, { forwardRef, useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUp,
} from '@material-ui/icons';
import InputOption from './InputOption';
import './Post.css';
import { db } from '../configs/firebase';

const Post = forwardRef(
  ({ name, description, message, photoUrl, postId }, ref) => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
      db.collection('posts')
        .doc(postId)
        .onSnapshot((snapshot) => {
          setLikes(snapshot.get('likes'));
        });
    }, [postId, likes]);

    function handleLikes() {
      if (isLiked) {
        db.collection('posts')
          .doc(postId)
          .update({ likes: likes - 1 });
        setIsLiked(false);
        console.log(likes);
      } else {
        db.collection('posts')
          .doc(postId)
          .update({ likes: likes + 1 });
        setIsLiked(true);
        console.log(likes);
      }
    }

    return (
      <div ref={ref} className={'post'}>
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
        <div className={'post__actions'}>
          <p>
            {likes ? (likes === 1 ? `${likes} like` : `${likes} likes`) : null}
          </p>
        </div>
        <div className={'post__bottom'}>
          <InputOption
            Icon={ThumbUp}
            title={'Like'}
            color={isLiked ? 'blue' : '#999'}
            onClick={handleLikes}
          />
          <InputOption Icon={ChatOutlined} title={'Comment'} color={'#999'} />
          <InputOption Icon={ShareOutlined} title={'Share'} color={'#999'} />
          <InputOption Icon={SendOutlined} title={'Send'} color={'#999'} />
        </div>
      </div>
    );
  },
);

export default Post;

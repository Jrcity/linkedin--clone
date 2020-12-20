import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import {
  CalendarToday,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from '@material-ui/icons';

//my imports
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import { db } from '../configs/firebase';

function Feed() {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    let input = post.trim();
    if (input) {
      db.collection('posts').add({
        description: 'Test',
        message: input,
        name: 'Redemption',
        postUrl: '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setPost('');
    }
  };

  return (
    <div className={'feed'}>
      <div className={'feed__top'}>
        <div className={'feed__input'}>
          <span className={'feed__createButton'}>
            <Create />
          </span>
          <form>
            <input
              type={'text'}
              placeholder={'start a post...'}
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
            <button type={'submit'} onClick={sendPost}></button>
          </form>
        </div>
        <div className={'feed__options'}>
          <InputOption Icon={Image} title={'Photos'} color={'#2085f9'} />
          <InputOption
            Icon={Subscriptions}
            title={'Videos'}
            color={'#e7a33e'}
          />
          <InputOption Icon={EventNote} title={'Events'} color={'#c0cbc0'} />
          <InputOption
            Icon={CalendarToday}
            title={'Write articles'}
            color={'#3fc15e'}
          />
        </div>
      </div>
      <div className={'feed__posts'}>
        {posts.map(({ data: { message, name, description, photoUrl }, id }) => (
          <Post
            key={id}
            name={name}
            message={message}
            description={description}
            photoUrl={photoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;

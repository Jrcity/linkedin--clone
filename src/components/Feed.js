import {
  CalendarToday,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from '@material-ui/icons';
import React from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';

function Feed() {
  return (
    <div className={'feed'}>
      <div className={'feed__top'}>
        <div className={'feed__input'}>
          <span className={'feed__createButton'}>
            <Create />
          </span>
          <form>
            <input type={'text'} placeholder={'start a post...'} />
            <button type={'submit'}></button>
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
        <Post
          name={'redemption'}
          description={'redemptionjonathan1@gmail.com'}
          message={'Hello people'}
          photoUrl={
            'https://media-exp1.licdn.com/dms/image/C5603AQFaAlP-q31fRQ/profile-displayphoto-shrink_100_100/0/1608125932159?e=1613606400&v=beta&t=YxV5EKWPtPv4ep5jf3omKwfsFxDU-hBbqzO9cN_bUFE'
          }
        />
      </div>
    </div>
  );
}

export default Feed;

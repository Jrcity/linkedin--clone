import { Grid } from '@material-ui/core';
import React from 'react';
import './Login.css';

import illustration from '../assets/referral.svg';

function Login() {
  return (
    <div className={'login'}>
      <div className={'login__header'}>
        <div className={'login__headerLeft'}>
          <img
            src={
              'https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-700x394.png'
            }
            alt={'linkedin--logo'}
          />
        </div>
        <div className={'login__headerRight'}>
          <a href={'#signin'}>Signin</a>
        </div>
      </div>
      <div className={'login__body'}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <h1 className={'login__text'}>
              Welcome to your professional community
            </h1>
            <div className={'login__details'}>
              <input
                id={'signin'}
                type={'email'}
                placeholder={'E-mail Address'}
              />
              <input type={'password'} placeholder={'Password'} />
            </div>
          </Grid>
          <Grid item xs={12} onPointerDown md={6}>
            <img
              className={'illustration'}
              src={illustration}
              alt={'illustration'}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;

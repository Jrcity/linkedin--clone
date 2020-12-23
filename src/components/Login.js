import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid,
} from '@material-ui/core';
import React from 'react';
import './Login.css';

import illustration from '../assets/referral.svg';
import { Link } from 'react-router-dom';

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
        <div className={'login__headerRight'}></div>
      </div>
      <div className={'login__body'}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <h1 className={'login__text'}>
              Welcome to your professional community
            </h1>
            <form className={'login__details'}>
              <input
                className={'login__input'}
                id={'sign'}
                type={'email'}
                placeholder={'E-mail Address'}
              />
              <input
                className={'login__input'}
                type={'password'}
                placeholder={'Password'}
              />
              <Button className={'login__button'}>Sign In</Button>
              <div className={'login__divider'}>
                <Divider />
              </div>
            </form>
            <div className={'login__options'}>
              <div className={'login__option'}>
                <Button>Signin with Google</Button>
              </div>
              <Accordion>
                <AccordionSummary>Not a member? Signup.</AccordionSummary>
                <AccordionDetails>
                  <form classname={'login__details'}>
                    <input
                      className={'login__input'}
                      id={'sign'}
                      type={'email'}
                      placeholder={'E-mail Address'}
                    />
                    <input
                      className={'login__input'}
                      type={'password'}
                      placeholder={'Password'}
                    />
                    <Button className={'login__button'}>Sign Up</Button>
                  </form>
                </AccordionDetails>
              </Accordion>
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

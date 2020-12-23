import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid,
} from '@material-ui/core';
import React, { useState } from 'react';
import './Login.css';

import illustration from '../assets/referral.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [fullname, setFullname] = useState('');

  const handleLogin = () => {};
  const handleSignup = () => {};
  const signinWithGoogle = () => {};

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
          <Grid tem xs={12} md={6}>
            <h1 className={'login__text'}>
              Welcome to your professional community.
            </h1>
            <form className={'login__details'}>
              <input
                className={'login__input'}
                type={'email'}
                placeholder={'E-mail Address'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={'login__input'}
                type={'password'}
                placeholder={'Password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleLogin} className={'login__button'}>
                Sign In
              </Button>
              <div className={'login__divider'}>
                <Divider />
              </div>
            </form>
            <div className={'login__options'}>
              <div className={'login__option'}>
                <Button>Signin with Google</Button>
              </div>
              <Accordion className={'login__details signup__details'}>
                <AccordionSummary>
                  Not a member? Click to<strong> signup.</strong>
                </AccordionSummary>
                <AccordionDetails>
                  <form>
                    <input
                      className={'login__input'}
                      type={'text'}
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      placeholder={'Full Name'}
                    />
                    <input
                      className={'login__input'}
                      type={'email'}
                      placeholder={'E-mail Address'}
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                    />
                    <input
                      className={'login__input'}
                      type={'password'}
                      placeholder={'Password'}
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                    />
                    <Button className={'login__button'}>Sign Up</Button>
                  </form>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          <Grid
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
            item
            xs={12}
            onPointerDown
            md={6}
          >
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

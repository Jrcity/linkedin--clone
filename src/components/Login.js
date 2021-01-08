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
import { auth, googleProvider } from '../configs/firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
        let splitName = userAuth.user.displayName;
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: `https://ui-avatars.com/api/?background=random&name=${splitName[0]}+${splitName[1]}`,
          }),
        );
        setEmail('');
        setPassword('');
      });
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !signupEmail || !signupPassword) {
      return;
    }
    let splitName = name.split(' ');
    auth
      .createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then((userAuth) => {
        //setting user profile;

        userAuth.user
          .updateProfile({
            displayName: name,
            profileURL: `https://ui-avatars.com/api/?background=random&name=${splitName[0]}+${splitName[1]}`,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: `https://ui-avatars.com/api/?background=random&name=${splitName[0]}+${splitName[1]}`,
              }),
            );
          });
        setName('');
        setSignupEmail('');
        setSignupPassword('');
      })
      .catch((error) => console.error(error.message));
  };
  const signinWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((userAuth) => {
        const { email, displayName, photoURL } = userAuth.user;
        let splitName = displayName.split();
        dispatch(
          login({
            email,
            displayName,
            photoUrl: photoURL
              ? photoURL
              : `https://ui-avatars.com/api/?background=random&name=${splitName[0]}+${splitName[1]}`,
          }),
        );
      })
      .catch((error) => console.error(error.message));
  };

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
              <Button
                type={'submit'}
                onClick={handleLogin}
                className={'login__button'}
              >
                Sign In
              </Button>
              <div className={'login__divider'}>
                <Divider />
              </div>
            </form>
            <div className={'login__options'}>
              <div className={'login__option'}>
                <Button onClick={signinWithGoogle}>Signin with Google</Button>
              </div>
              <Accordion className={'login__details signup__details'}>
                <AccordionSummary>
                  Not a member? <strong>Sign Up.</strong>
                </AccordionSummary>
                <AccordionDetails>
                  <form>
                    <input
                      className={'login__input'}
                      type={'text'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                    <Button
                      type={'submit'}
                      onClick={handleSignup}
                      className={'login__button'}
                    >
                      Sign Up
                    </Button>
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

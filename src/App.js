import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { login, logout, selectUser } from './features/userSlice';
import FirstPage from './routes/FirstPage';
import { auth } from './configs/firebase';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    //persist with firebase authentication
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const { displayName, email, uid, photoURL } = userAuth;
        let splitName = displayName;
        //user is logged in
        dispatch(
          login({
            email,
            displayName,
            uid,
            photoUrl: photoURL
              ? photoURL
              : `https://ui-avatars.com/api/?background=random&name=${splitName[0]}+${splitName[1]}`,
          }),
        );
      } else {
        //user is logged out;
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const user = useSelector(selectUser);
  return (
    <div className={'app'}>
      <Router>
        <Switch>
          {user ? (
            <Redirect to={{ pathname: '/feed/' }} />
          ) : (
            <Redirect to={{ pathname: '/signin/' }} />
          )}
        </Switch>
        <Route path={'/feed/'} component={FirstPage} />
        <Route path={'/signin/'} component={Login} />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { selectUser } from './features/userSlice';
import FirstPage from './routes/FirstPage';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className={'app'}>
      <Router>
        <Switch>
          {user ? (
            <Route path={'/'} render={<FirstPage />} />
          ) : (
            <Redirect to={{ pathname: '/signin' }} />
          )}
        </Switch>
        <Route path={'/signin'} component={Login} />
      </Router>
    </div>
  );
}

export default App;

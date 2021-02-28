import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './index.css';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';


import reportWebVitals from './reportWebVitals';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

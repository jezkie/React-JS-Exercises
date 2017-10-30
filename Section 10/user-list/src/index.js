import React from 'react';
import ReactDOM from 'react-dom';
import Users from './containers/users';
import App from './components/app';
import Home from './components/home';
import UserProfile from './containers/userProfile';
import { Provider } from 'react-redux';
import UsersStore from './store';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import './App.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Provider store={UsersStore}>
      <Router history={hashHistory}>
        <Route path='/' components={App}>
          <IndexRoute component={Home}/>
          <Route path='users' components={Users}/>
          <Route path='user(:userName)' components={UserProfile}/>
        </Route>
      </Router>
    </Provider>
  </div>, document.getElementById('root')
);

registerServiceWorker();

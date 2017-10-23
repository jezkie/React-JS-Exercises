import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Users from './containers/users';
import { Provider } from 'react-redux';
import UsersStore from './store';

import './App.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    {/*<App/>*/}
    <Provider store={UsersStore}>
      <Users/>
    </Provider>
  </div>, document.getElementById('root')
);

registerServiceWorker();

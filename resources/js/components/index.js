import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

import LoginForm from './authentication/login';
import ForgotPasswordForm from './authentication/forgotPassword';
import Dashboard from './dashboard/index';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducers';

const store = createStore(rootReducer);

export default class Index extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/(login|)/" component={LoginForm} />
            <Route exact path="/forgot-password" component={ForgotPasswordForm} />
            <Route exact
             path="/(dashboard|home|products|create-product)"
             component={Dashboard}
            />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

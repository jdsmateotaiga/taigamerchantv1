import React, { Component } from 'react';
import './common.scss';

import NavigationTop from './navigations/navigationTop';
import NavigationSide from './navigations/navigationSide';

import Home from './home/index';
import Products from './products/index';
import CreateProduct from './products/create';

import { Layout, Menu, Icon } from 'antd';
import { Switch, Route, HashRouter } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DashBoard extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <NavigationSide route={this.props} />
        <Layout>
          <NavigationTop />
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <HashRouter>
                <Switch>
                  <Route exact path="/(dashboard|home)" component={Home} />
                  <Route exact path="/products" component={Products} />
                  <Route exact path="/create-product" component={CreateProduct} />
                </Switch>
              </HashRouter>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}><a href="https://taiga.com.ph/" target="_blank">Taiga.com.ph</a> &copy; 2020</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default DashBoard;

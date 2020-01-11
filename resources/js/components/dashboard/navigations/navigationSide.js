import React, { Component } from 'react';
import {
  Layout,
  Menu,
  Icon
} from 'antd';
import { Link } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

class NavigationSide  extends React.Component {
    state = {
      collapsed: false,
    };

    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    };

    render() {
      const { location } = this.props.route;
      return (
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline">
            <Menu.Item key="/dashboard">
              <Link to="/dashboard">
                <Icon type="area-chart" />
                <span>DashBoard</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="/products"
              title={
                <span>
                  <Icon type="table" />
                  <span>Products</span>
                </span>
              }
            >
              <Menu.Item key="/products">
                <Link to="/products">
                  All Products
                </Link>
              </Menu.Item>
              <Menu.Item key="/create-product">
                <Link to="/create-product">
                  Add New
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/categories">
                  Categories
                </Link>
              </Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

      );
    }
}

export default NavigationSide;

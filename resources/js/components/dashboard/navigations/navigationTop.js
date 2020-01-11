import React from 'react';
import {
   Menu,
   Dropdown,
   Icon,
   Layout
 } from 'antd';
import { Avatar } from 'antd';
const { Header } = Layout;

 function NavigationTop() {
   const menu = (
     <Menu>
       <Menu.Item key="0">
         <a href="http://www.alipay.com/">1st menu item</a>
       </Menu.Item>
       <Menu.Item key="1">
         <a href="http://www.taobao.com/">2nd menu item</a>
       </Menu.Item>
       <Menu.Divider />
       <Menu.Item key="3">3rd menu item</Menu.Item>
     </Menu>
   );
    return(
      <Header style={{ background: '#fff', padding: 0 }}>
        <div className="profile-nav">
          <Dropdown overlay={menu} trigger={['click']}>
          <div>
              <a className="ant-dropdown-link" href="#">
                <Avatar shape="square" size={50} src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg" />
                &nbsp;&nbsp; Hi Name <Icon type="down" />
              </a>
          </div>
          </Dropdown>
        </div>
      </Header>
    );
}

export default NavigationTop;

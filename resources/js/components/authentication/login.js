import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import './common.scss';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.push("/dashboard");
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="auth-container">
        <div className="auth-area">
          <img className="taiga-logo" src="http://taiga.localhost/img/Taiga-Logo.png" />
          <Form onSubmit={this.handleSubmit} className="auth-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <Link className="auth-form-forgot" to="/forgot-password">
                Forgot password
              </Link>
              <Button type="primary" htmlType="submit" className="auth-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default LoginForm;

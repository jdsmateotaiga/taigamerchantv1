import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import './common.scss';

class NormalForgotPasswordForm extends React.Component {


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
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
              })(
                <Input
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Email Address"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="auth-form-button">
                Send Reset Link
              </Button>

            </Form.Item>
            <Link to="/login">
              Back to login
            </Link>
          </Form>
        </div>
      </div>
    );
  }
}

const ForgotPasswordForm = Form.create({ name: 'normal_login' })(NormalForgotPasswordForm);

export default ForgotPasswordForm;

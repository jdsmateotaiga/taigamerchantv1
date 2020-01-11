import React, { Component } from 'react';
import {
  Form,
  Input,
  Col, Row, Button
} from 'antd';

import './css/common.scss';
import Editor from './editor.js';
import ImageUpload from './upload.js';

class CreateProductForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
         <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col span={24}>
                <h1>Add Product</h1>
              </Col>
              <Col span={16} className="product-info">
                <Form.Item>
                  {getFieldDecorator('name', {
                   rules: [
                     {
                       required: true,
                       message: 'Please input the product name!',
                     },
                   ],
                 })(<Input style={{height:'40px', fontSize: '25px'}} />)}
                </Form.Item>
                <Editor />
              </Col>
              <Col span={8} className="product-other">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Publish
                  </Button>
                </Form.Item>
                <ImageUpload />
              </Col>
            </Row>
         </Form>
      </React.Fragment>
    );
  }
}



const CreateProduct = Form.create({ name: 'register' })(CreateProductForm);
export default CreateProduct;

import React, { Component } from 'react';
import { Upload, Button, Icon } from 'antd';

const fileList = [
  {
    uid: '1',
    name: 'xxx.png',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '2',
    name: 'yyy.png',
    status: 'error',
  },
];

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...fileList],
};

class ImageUpload extends React.Component {
  render() {
    return (
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Upload
        </Button>
      </Upload>
    )
  }
}

export default ImageUpload;

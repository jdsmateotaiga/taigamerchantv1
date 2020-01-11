import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';

import { connect } from 'react-redux';
import { editorAction } from './../../reducers/actions/editor';

import './css/editor.scss';

class Editor extends React.Component {

  handleChange = (value) => {
    this.props.inputEditor(value);
  }

  render () {
    console.log(this.props);
    return (
        <ReactQuill
          theme="snow"
          modules={Editor.modules}
          formats={Editor.formats}
          onChange={this.handleChange}
          placeholder="Product Description"
         />
     )
  }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ 'header': []}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code'],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    [{'color': []}, {'background': []}],
    [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
    ['clean']
  ],
   clipboard: {
   matchVisual: false,
  }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent', 'code',
  'link', 'image', 'video', 'color', 'background', 'align', 'clean'
];


const mapDispatchToProps = (dispatch) => {
  return {
    inputEditor: (value) => { dispatch(editorAction(value)) }
  }
}


export default connect(null, mapDispatchToProps)(Editor);

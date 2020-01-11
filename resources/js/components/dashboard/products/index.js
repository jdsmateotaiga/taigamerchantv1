import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';

const columns = [
  {
    title: 'Thumbnail',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Stock',
    key: 'stocks',
    dataIndex: 'stocks',
    render: stocks => (
      <span>
          <Tag color={(stocks) ? 'green' : 'volcano'}>
              {(stocks) ? 'In ' : 'Out '}Stock
          </Tag>
          {stocks}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: record => (
      <span>
        <a>Edit</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

class Products extends React.Component {
  state = {
    selectedRowKeys: [],
    data: [
      {
        key: '1',
        thumbnail: '',
        name: 'Racing Boy Mags',
        price: 320.00,
        brand: 'RCB',
        stocks: 1,
      },
      {
        key: '2',
        thumbnail: '',
        name: 'Mutarru Handle Bar',
        price: 100.00,
        brand: 'Mutarru',
        stocks: 0,
      },
    ]
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: 'all-data',
          text: 'Select All Data',
          onSelect: () => {
            this.setState({
              selectedRowKeys: [...Array(46).keys()], // 0...45
            });
          },
        },
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
    )
  }
}

export default Products;

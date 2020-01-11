import React, { Component } from 'react';
import ProductCountPurchase from '../charts/productCountPurchase';

class Home extends React.Component {
  state = {
    data : [
      {
          month: "Jan",
          count: 7
      },
      {
          month: "Feb",
          count: 6.9
      },
      {
          month: "Mar",
          count: 9.5
      },
      {
          month: "Apr",
          count: 8.5
      },
      {
          month: "May",
          count: 18.4
      },
      {
          month: "Jun",
          count: 15.2
      },
      {
          month: "Jul",
          count: 25.2
      },
      {
          month: "Aug",
          count: 16.6
      },
      {
          month: "Sep",
          count: 23.3
      },
      {
          month: "Oct",
          count: 10.3
      },
      {
          month: "Nov",
          count: 13.9
      },
      {
          month: "Dec",
          count: 4.8
      }
    ]
  };

  render() {
    return (
      <div>
        <ProductCountPurchase data={this.state.data} />
      </div>
    )
  }
}

export default Home;

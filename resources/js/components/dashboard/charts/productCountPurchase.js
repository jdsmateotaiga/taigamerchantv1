import React, { Component } from 'react';

import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

function ProductCountPurchase(props) {
  const cols = {
    month: {
      range: [0, 1]
    }
  };
  return (
    <Chart height={400} data={props.data} scale={cols} forceFit>
          <Legend />
          <Axis name="month" />
          <Axis
            name="count"
            label={{
              formatter: val => `${val}`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="month*count"
            size={2}
            color={"#333"}
            shape={"smooth"}
          />
          <Geom
            type="point"
            position="month*count"
            size={6}
            shape={"circle"}
            color={"orange"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
    </Chart>
  );
}

export default ProductCountPurchase;

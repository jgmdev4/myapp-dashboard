import "../../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import React from 'react';

const Line = () => {

    const data =[ 
        {x:0, y:8},
        {x:1, y:5},
        {x:2, y:4},
        {x:3, y:9},
        {x:4, y:1},
        {x:5, y:7},
        {x:6, y:6},
        {x:7, y:3},
        {x:8, y:2},
        {x:9, y:0},
    ]

    return(
<div className="line-graph">
<h1>Line-Chart-Example</h1>
<XYPlot
  width={300}
  height={300}>
  <HorizontalGridLines />
  <LineSeries
    data={[
      {x: 1, y: 10},
      {x: 2, y: 5},
      {x: 3, y: 15}
    ]}/>
  <XAxis />
  <YAxis />
</XYPlot>

</div>
    )
}

export default Line;
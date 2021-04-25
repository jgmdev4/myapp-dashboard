//import React, { Component } from 'react';

import "../../../node_modules/react-vis/dist/style.css";
import React from 'react';

import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries,
    MarkSeries,
    Voronoi,
    Crosshair,
    GradientDefs,
    AreaSeries} from 'react-vis';
  
    const lines = [
      [{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}, {x: 5, y: 3}, {x: 6, y: 5}, {x: 7, y: 15}, {x: 8, y: 12},
      {x: 9, y: 3}, {x: 10, y: 5}, {x: 11, y: 15}, {x: 12, y: 12}, {x: 13, y: 3}, {x: 14, y: 5}, {x: 15, y: 15}, {x: 16, y: 12}],
      [{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}, {x: 5, y: 2}, {x: 6, y: 7}, {x: 7, y: 11}, {x: 8, y: 8},
        {x: 9, y: 10}, {x: 10, y: 4}, {x: 11, y: 2}, {x: 12, y: 15}, {x: 13, y: 2}, {x: 14, y: 7}, {x: 15, y: 11}, {x: 16, y: 8}],
      [{x: 1, y: 7}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 4}, {x: 5, y: 6}, {x: 6, y: 13}, {x: 7, y: 5}, {x: 8, y: 13},
        {x: 9, y: 7}, {x: 10, y: 11}, {x: 11, y: 9}, {x: 12, y: 4}, {x: 13, y: 6}, {x: 14, y: 13}, {x: 15, y: 5}, {x: 16, y: 13}]
    ].map((p, i) => p.map(d => ({...d, line: i})));
    const nodes = lines.reduce((acc, d) => [...acc, ...d], []);
  
    const getDomain = (data, key) => {
      const {min, max} = data.reduce(
        (acc, row) => ({
          min: Math.min(acc.min, row[key]),
          max: Math.max(acc.max, row[key])
        }),
        {min: Infinity, max: -Infinity}
      );
      return [min, max];
    };
    const xDomain = getDomain(nodes, 'x');
    const yDomain = getDomain(nodes, 'y');
  
    export default class Example extends React.Component {
      constructor(props) {
      super(props);
      this.state = {
        crosshairValues: lines.map(d => d[7])
      };
    }
      state = {
        hoveredNode: null
      };
  
      _onMouseLeave = () => {
        this.setState({crosshairValues: []});
      };
  
      _onNearestX = (value, {index}) => {
        this.setState({crosshairValues: lines.map(d => d[index])});
      };
  
      render() {  
        const {hoveredNode} = this.state;
        return (
          <div>
              <h1>Crosshair-Chart-Example</h1>
            <XYPlot
              xDomain={xDomain}
              yDomain={yDomain}
              margin={{top: 10, left: 40, bottom: 40, right: 10}}
              width={300}
              height={300}
              onMouseLeave={this._onMouseLeave}
            >
               <GradientDefs>
                <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="red" stopOpacity={0.4}/>
                  <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
                </linearGradient>
              </GradientDefs>
              <HorizontalGridLines />
              <VerticalGridLines />
              <XAxis title="X Axis" />
              <YAxis title="Y Axis" />
              {lines.map((d, i) => (
                <AreaSeries 
                  color={'url(#CoolGradient)'}
                  key={i}
                  opacity={hoveredNode && hoveredNode.line === i ? 1 : 0.3}
                  data={d}
                  onNearestX={this._onNearestX} 
                />
              ))}
              <Crosshair
                values={this.state.crosshairValues}
                className={'test-class-name'}
              />
            </XYPlot>
          </div>
        );
      }
    }
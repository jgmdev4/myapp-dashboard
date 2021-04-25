import React from 'react';
import "./clock.css";

class Clock extends React.Component {
    state={
      curTime : new Date().toLocaleString(),
    }
    render(){
      return (
        <div className="App">
          <h1 className="time"> {this.state.curTime}</h1>
        </div>
      );
    }
  }
export default Clock;
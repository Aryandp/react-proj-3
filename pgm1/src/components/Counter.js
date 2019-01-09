import React, { Component } from 'react';

import css from '../counter.css'
class Counter extends Component{


  IncreaseHandler(){
    this.props.Increase();
  }

  DecreaseHandler(){
    this.props.Decrease();
  }

  render() {
    return(
      <div>
          <div className="box-heading"><span>Counter</span></div>
        <div className="box">
          <div className="box-count"><h2>{this.props.count}</h2></div>
          <div className="box-buttons">
            <button onClick={this.IncreaseHandler.bind(this)}>Increase</button>
            <button onClick={this.DecreaseHandler.bind(this)}>Decrease</button>
          </div>
        </div>
          </div>
    );
  }
}
export default Counter;

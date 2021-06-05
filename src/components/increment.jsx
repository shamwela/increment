import React, { Component } from 'react';

class Increment extends Component {
  state = { count: 0 };

  render() {
    return (
      <React.Fragment>
        <span>{this.state.count}</span>
        <button>+</button>
      </React.Fragment>
    );
  }
}

export default Increment;

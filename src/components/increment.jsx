import React, { Component } from 'react';

class Increment extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span style={{ margin: '3rem' }}>{this.state.count}</span>
        <button style={{ margin: '3rem' }} onClick={this.handleIncrement}>
          +
        </button>
      </React.Fragment>
    );
  }
}

export default Increment;

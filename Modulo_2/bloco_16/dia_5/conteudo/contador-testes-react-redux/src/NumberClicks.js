// src/NumberClicks
import React from 'react';
import { connect } from 'react-redux';
class NumberClicks extends React.Component {
  render() {
    return <div className="App-header">{this.props.counter}</div>;
  }
}

const mapStateToProps = state => ({
  counter: state.clickReducer.counter});

export default connect(mapStateToProps)(NumberClicks);
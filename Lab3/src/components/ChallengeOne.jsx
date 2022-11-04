import React, { Component } from 'react';
import lookLeft from '../assets/look-left.jpeg';
import lookRight from '../assets/look-right.jpeg';

class ChallengeOne extends Component {
  state = {
    activeImgSrc: lookLeft,
  };

  handleClick(direction) {
    const newDirection = direction === 'left' ? lookLeft : lookRight;
    if (this.state.activeImgSrc === newDirection) return;
    this.setState({
      activeImgSrc: newDirection,
    });
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img className="ch1" src={this.state.activeImgSrc} alt="" />
        </div>
        <button className="btn" onClick={() => this.handleClick('left')}>
          ⭠
        </button>
        <button className="btn" onClick={() => this.handleClick('right')}>
          ⭢
        </button>
      </>
    );
  }
}

export default ChallengeOne;

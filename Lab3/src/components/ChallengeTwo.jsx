import React, { Component } from 'react';

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
];

export default class ChallengeTwo extends Component {
  state = {
    activeList: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeList: studentList,
      });
    }, 3000);
  }

  //random button handler
  randomize = () => {
    const newList = studentList.sort((a, b) => 0.5 - Math.random());
    this.setState({
      activeList: newList,
    });
  };

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>
            {this.state.activeList.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <button className="btn large" onClick={this.randomize}>
          Randomize
        </button>
      </>
    );
  }
}

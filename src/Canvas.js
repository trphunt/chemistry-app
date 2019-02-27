import React, { Component } from 'react';

class Canvas extends Component {
  state = { x: 50, y: 50, isMouseDown: false, filled: [] }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  handleMouseClick = event => {
    this.setState({ isMouseDown: !this.state.isMouseDown });
    console.log('isMouseDown', this.state.isMouseDown);
    console.log(event.clientX, event.clientY);
  }

  render() {
    return (
      <div style={{ borderStyle: 'solid', width: 300, height: 300}}>
        <svg width="300" height="300"
             onMouseMove={this.handleMouseMove} onClick={this.handleMouseClick}>
          <circle cx={this.state.x-10} cy={this.state.y-80} r="5"
                  stroke="black" fill="black" />

        </svg>
      </div>
    )
  }
}

export default Canvas;

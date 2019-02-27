import React, { Component } from 'react';
import Elements from './Elements';
import Canvas from './Canvas'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Chemistry App</h1>
        <div>
          <Canvas />
          <Elements />
        </div>
      </div>
    )
  }
}

export default App;

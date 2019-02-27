import React, { Component } from 'react';
import ELEMENTS from './data/elements';

class Element extends Component {
  render() {

    const { name, symbol, atomicNumber, atomicMass } = this.props.element;

    return (
      <div style={
        {
          display: 'flex',
          width: '12em',
          margin: '1em',
          borderStyle: 'solid',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: '0.8em'
        }
      }>
        <h3>{atomicNumber}</h3>
        <h1>{symbol}</h1>
        <p>{name}</p>
        <h3>{atomicMass}</h3>
      </div>
    )
  }
}

class Elements extends Component {
  render() {
    return (
      <div>
        <h2>Elements</h2>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {
            ELEMENTS.map(ELEMENT => {
              return (
                <Element key={ELEMENT.id} element={ELEMENT} />
              );
            })
          }
        </div>
      </div>
    )
  }
}

export default Elements;

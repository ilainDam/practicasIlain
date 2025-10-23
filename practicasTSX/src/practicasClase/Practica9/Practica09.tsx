import React, { Component } from 'react';

class Practica09 extends Component {

  state = { numero: 1 }

  render() {
    let { numero } = this.state;
    {
      if (numero == 11) {
        numero = 1;
      }
    }
    return (
      <div>
        Tabla del 2
        <p>2*{numero} = {2 * numero}</p>
        <p>
          <button onClick={() => this.setState({ numero: numero + 1 })}>2*{numero + 1}</button>
        </p>
      </div>
    )
  }
}
export default Practica09;

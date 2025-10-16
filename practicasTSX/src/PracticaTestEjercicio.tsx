import { Console } from 'console';
import React, { Component } from 'react';

class Practica09 extends Component {

  state = { nRandom: "" }

  generarAlumnoAleatorio = ()=>{
    let arr=["pepe","Maria","Isidoro","Rigoberto","Koko"];
    let num;
    num = Math.trunc(Math.random()*arr.length);
    let alumnoElegido: string = arr[num];
    this.setState({nRandom: alumnoElegido})
  }
  render() {
    let {nRandom} = this.state;
    let listaAlumnos=[];
    return (
      <div>
            <button onClick={this.generarAlumnoAleatorio}>Alumnos al azar</button>
            <p>Alumno {this.state.nRandom}</p>
            <p>Lista de alumnos</p>
      </div>
    )
  }
}
export default Practica09;

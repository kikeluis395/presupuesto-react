import React, {Fragment, useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

  //definir state
  const [ cantidad, guardarCantidad ] = useState(0);
  const [error, guardarError] = useState(false);

  //Funcion que lee el presupuesto
  const definirPresupuesto = e => {
     guardarCantidad(parseInt(e.target.value, 10 ))
  }

  //funcion que define el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    //validar
    if(cantidad < 1 || isNaN(cantidad)) {
      guardarError(true)
      return
    }

    //se se pasa la validacion
    guardarError(false)

    guardarPresupuesto(cantidad)
    guardarRestante(cantidad)
    actualizarPregunta(false)
  }
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      { error ? <Error mensaje="el Presupuesto es Incorrecto"/>: null}
      <form onSubmit={agregarPresupuesto}>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange= {definirPresupuesto}
        />
        <input 
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"  
        />
      </form>
    </Fragment>
  );
}

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
}
export default Pregunta
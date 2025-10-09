
import React from 'react'
import PropTypes from 'prop-types'


    let Practica4 = (props) => {
        return (
            <>
                <p>Recibido: {props.n1 + props.n2}</p>
            </>
        );
    }
    Practica4.propTypes = {
        n1: PropTypes.number.isRequired,
        n2: PropTypes.number.isRequired
    }

export default Practica4;
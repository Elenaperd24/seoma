import React from 'react'
import { Link, Link as LinkRouter } from "react-router-dom";

const Respuesta = () => {
    return (
        <div id='respuesta'>
            <div className='respuestaContenedor'>

                <h1>

                We will answer you shortly
                </h1>

                <div className="container botonrespuesta ">
                    <div className="btnfluor">

                        <LinkRouter to="/product">read more</LinkRouter>
                    </div>
                </div>



            </div >

        </div>
    )
}

export default Respuesta
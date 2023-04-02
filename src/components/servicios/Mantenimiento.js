import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import bg from './bgproducto.jpg'

const Mantenimiento = () => {

    return (
        <>

            <div>
                <section id="appMobile">
                    <div className="container">
                        <div className='subtitle-principal-mobile '>
                            <h2>Mantenimiento</h2>
                        </div>
                    </div>


                    <div className="container appMobileContainer">
                        <div className="appMobileImage">

                            <img src={bg} alt="" />

                        </div>

                        <div className="appMobileContent">

                            <h4 id="txt">Para tu App Web o Página Web</h4>


                            <p>
                            SEOMA nos permite crear todo tipo de webs y gestionar contenido de forma eficaz.
                             Pero también requiere mantenimiento constante para no tener ningún tipo de problema a medio y largo plazo. Libere su mente de preocupaciones y enfóquese solo en lo importante para su negocio. Cubrimos todos los aspectos de mantenimiento que son necesarios para que una web funcione correctamente, con buena performance y seguridad.</p>



                            <LinkRouter to='/appMobile' className="container botonAppMobile">
                                <div className="btnfluor">
                                    <a href="">info</a>
                                </div>
                            </LinkRouter>


                        </div>
                    </div>

                    <div className="contentBarraProgresive">
                        <p>Usuarios que usan internet desde Smartphone <span>93%</span></p>
                        <div className="progress">

                            <div className="progress-value"></div>
                        </div>


                    </div>


                </section>
            </div>

        </>
    )
}

export default Mantenimiento
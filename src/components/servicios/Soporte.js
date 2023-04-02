import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import bg from './bgproducto.jpg'

const Actualizacion = () => {

    return (
        <>

            <div>
                <section id="appMobile">
                    <div className="container">
                        <div className='subtitle-principal-mobile '>
                            <h2>Actualización</h2>
                        </div>
                    </div>


                    <div className="container appMobileContainer">
                        <div className="appMobileImage">

                            <img src={bg} alt="" />

                        </div>

                        <div className="appMobileContent">

                            <h4 id="txt">Gestionamos tu sitio web responsive</h4>


                            <p>
                                Una Web Responsive es aquella que es capaz de adaptarse a cualquier dispositivo donde
                                se visualice. Las estadísticas muestran el creciente de tráfico web que se genera
                                desde dispositivos móviles, pero además Google penaliza  en su buscador a aquellas
                                webs que no son responsables. Si tu sitio web está obsoleto, es el momento de ponerte en
                                manos de nuestro equipo para diseñar una web responsive </p>



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

export default Actualizacion
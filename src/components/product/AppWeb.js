import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import appweb from './img/website1.jpeg'

const AppWeb = () => {

    return (
        <>

            <section id="appWeb">
                <div className="container">
                    <div className='subtitle-principal '>
                        <h2>Web applications</h2>
                    </div>
                </div>


                <div className="container appwebContainer">

                    <div className="appWebContent">

                        <h4>
                        We design your site to renew your image and online presence. </h4>

                        <p>
                        Do you need to generate more sales? We develop Institutional Websites. Landing Pages
                             Adaptable to all screens. Design of clear, attractive and effective web pages
                             that will help you give the best image of your business.
                        </p>





                    </div>
                    <div className="appWebImage">
                        <div className="container__vector">
                            <img src={appweb} alt="" />
                        </div>
                    </div>


                </div>


                <LinkRouter to='/appWeb' className="container botonPC">
                    <div className="btnfluorPC">
                        <a href="">info</a>
                    </div>
                </LinkRouter>


            </section>

        </>
    )
}

export default AppWeb
import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import axios from 'axios'
import bg from './img/mobile.jpg'

const AppMobile = () => {

    return (
        <div>
            <section id="appMobile">
            <div className="container">
                    <div className='subtitle-principal-mobile '>
                        <h2>Mobile applications</h2>
                    </div>
                </div>


                <div className="container appMobileContainer">
                    <div className="appMobileImage">

                        <img src={bg} alt="" />

                    </div>

                    <div className="appMobileContent">

                        <h4 id="txt">We manage your responsive website</h4>
                    

                        <p>
                        A Responsive Web is one that is capable of adapting to any device where
                             be displayed. The statistics show the growing web traffic that is generated
                             from mobile devices, but Google also penalizes in its search engine those
                             websites that are not responsible. If your website is outdated, it's time to get in touch
                             hands of our team to design a responsive website </p>

        

                        <LinkRouter to='/appMobile' className="container botonAppMobile">
                            <div className="btnfluor">
                                <a href="">info</a>
                            </div>
                        </LinkRouter>


                    </div>
                </div>

                <div className="contentBarraProgresive">
                    <p>Users who use the internet from Smartphone <span>93%</span></p>
                    <div className="progress">

                        <div className="progress-value"></div>
                    </div>


                </div>


            </section>
        </div>
    )
}

export default AppMobile
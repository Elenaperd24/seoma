import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import axios from 'axios'


const Socialmedia = () => {
    const [{ smedia }, dispatch] = useStateValue()

    return (
        <section id="socialMedia">
            <div className="container">
                <div className='subtitle-principal-media '>
                    <h2>Social Media</h2>
                </div>
            </div>

            <div className="socialMediaContainer">

                <div className="socialMediaContent">

                    <div className="socialMediaInfo">
                        <h4>Generation and design of online stores to increase your saless</h4>

                        <p>Making web sales does not have to be so complicated. How to get it? We do the hard part. We design and generate your web store so that you can increase your sales channels and your exposure.</p>


                    </div>

                    <LinkRouter to='/smedia' className="container botonSocialMedia">
                        <div className="btnfluormedia">
                            <a href="">info</a>
                        </div>
                    </LinkRouter>





                </div>


            </div>


        </section>
    )
}

export default Socialmedia
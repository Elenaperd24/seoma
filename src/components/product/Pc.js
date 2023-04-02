import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import axios from 'axios'
import CarouselPc from './CarouselPc'

const Pc = () => {

    return (
        <div>
            <section id="pc">
                <div className="container">
                    <div className='subtitle-principal-pc '>
                        <h2>Equipment</h2>
                    </div>
                </div>


                <div className="container pcContainer">

                    <div className="pcContent">

                        <h4>We give you advice on everything you need</h4>
                        <p>
                        We offer a variety of equipment to help you enter the world of technology,
                             with the best prices and staff
                             highly qualified to provide you with the best service
                        </p>


                    </div>
                    <div className="pcCarousel">
                        <CarouselPc />
                    </div>
                </div>
                <LinkRouter to='/equipments' className="container botonPC">
                    <div className="btnfluorPC">
                        <a href="">info</a>
                    </div>
                </LinkRouter>

            </section>

        </div>
    )
}

export default Pc
import React, { useEffect } from "react";
import Hero from './Hero'
import HeroGothic from './HeroGothic'
import './home.css'

const Home = () => {
    useEffect(() => {
        window.scroll(0, 0);
      }, []);


    return (
        <>


            <div id="home">
                <Hero />

                <section id='all-need'>
                    <div>
                        <h1>EVERYTHING YOU NEED</h1>

                        <div className='allNeed'>
                            <div className='allNeedContent'>
                                <h5>ADAPTED FOR MOBILE</h5>
                                <p>Your page will look perfect on any device, be it a phone, a tablet or a computer.</p>
                            </div>
                            <div className='allNeedContent'>
                                <h5>FREE REGISTRATION</h5>
                                <p>You can register for free; no credit card required. It is risk free.</p>
                            </div>
                            <div className='allNeedContent'>
                                <h5>FAST CUSTOM SUPPORT</h5>
                                <p>We've helped launch millions of websites and we're ready to make yours a success too.</p>
                            </div>

                        </div>
                        <div className='allNeed'>
                            <div className='allNeedContent'>
                                <h5>HTTPS SECURE CONNECTION</h5>
                                <p>Enjoy peace of mind knowing that your website and visitor data is protected by the HTTPS encryption protocol.</p>
                            </div>
                            <div className='allNeedContent'>
                                <h5>CUSTOM DOMAIN</h5>
                                <p>Adding a personal address to your website is easy, and in most cases you can use one you already have.</p>
                            </div>
                            <div className='allNeedContent'>
                                <h5>FLEXIBLE DESIGNS</h5>
                                <p>Goodbye to flat and boring templates: you will always be in control of what is on your website.</p>
                            </div>

                        </div>




                    </div>

                </section>




                <div className='homeMain'>

                    <div className='homeImage'>

                        <img src='https://www.jimdo.com/static/3e429504c49b797f94016ad1a6709112/b8073/style.webp'></img>
                    </div>



                    <div className='homeDescrip'>

                        <h2>Get your website easily</h2>


                        <p>At the beginning we ask you a few questions to
                            get to know you. Next, depending on your professional sector,
                            we combine your information with the content created by our professionals.
                            The result is a unique web page with texts, photos and your own information,
                            completely ready to be presented and adapted to your business. </p>
                    </div >

                </div >



                <div className='homeImgFixeContenedor'>

                    <div className='homeImgFixed'>


                    </div>
                </div>



                <HeroGothic />

                <div className='home-frase'>

                    <h1>

                        "Simplicity taken to the extreme is called elegance"
                    </h1>

                    <p className='firma' >Jhon Franklin</p>




                </div >






            </div>


        </>
    )
}

export default Home
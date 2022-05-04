import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";

import "./servicios.css";
import capacitacion from "./capacitacion.jpeg";
import mantenimiento from "./mantenimiento.jpg";
import metricas from "./metricas.jpg";
import soporte from "./soporte.jpeg";

const Servicios = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="section2">
        <div className="banner-service">
        
            <h1>We can help you</h1>
            <p>ARE YOU GETTING THE BEST OUT OF YOUR IT INFRASTRUCTURE?</p>
        
        </div>
      </section>


      <section id="appMobile">
        <div>
          <div className="container appMobileContainer">
            <div className="appMobileImage">
              <img src={capacitacion} alt="" className="spaceservices" />
            </div>

            <div className="appMobileContent">
              <div className="container">
                <div className="subtitle-principal-mobile spaceservices">
                  <h2>Trainings</h2>
                </div>
              </div>

              <h4 id="txt">
                Let us do the work of finding you the perfect expert so you can
                stand out
              </h4>

              <p>
                SEOMA Experts are experienced freelance developers. Selected
                based on their years of experience and the quality of their
                work, Experts can help you polish an existing site or create a
                new site from scratch.{" "}
              </p>

              {/*<LinkRouter
                to="/capacitaciones"
                className="container botonAppMobile"
              >
                <div className="btnfluor">
                  <a href="">info</a>
                </div>
  </LinkRouter>*/}
            </div>
          </div>
        </div>

        <div className="container appMobileContainer">
          <div className="appMobileImage">
            <img src={mantenimiento} alt="" className="spaceservices"/>
          </div>

          <div className="appMobileContent">
            <div>
              <div className="container">
                <div className="subtitle-principal-mobile spaceservices">
                  <h2>Maintenance</h2>
                </div>
              </div>

              <h4 id="txt">For your Web App or Web Page</h4>

              <p>
                SEOMA allows us to create all kinds of websites and manage
                content effectively. But it also requires constant maintenance
                to avoid any type of problem in the medium and long term. Free
                your mind from worries and focus only on what is important for
                your business. We cover all maintenance aspects that are
                necessary for a website to function properly, with good
                performance and safety.{" "}
              </p>

              {/*<LinkRouter
                to="/mantenimiento"
                className="container botonAppMobile"
              >
                <div className="btnfluor">
                  <a href="">info</a>
                </div>
</LinkRouter>*/}

            </div>
          </div>
        </div>

        <div className="container appMobileContainer">
          <div className="appMobileImage">
            <img src={metricas} alt="" className="spaceservices"/>
          </div>

          <div className="appMobileContent">
            <div>
              <div className="container">
                <div className="subtitle-principal-mobile spaceservices">
                  <h2>Metrics Analysis</h2>
                </div>
              </div>

              <h4 id="txt">Understand the performance of your website</h4>

              <p>
                Get useful and detailed information about who visits your
                website and how they interact with your content thanks to our
                web analytics tools.{" "}
              </p>

              {/*<LinkRouter to="/analisisM" className="container botonAppMobile">
                <div className="btnfluor">
                  <a href="">info</a>
                </div>
</LinkRouter>*/}

            </div>
          </div>
        </div>

        <div className="container appMobileContainer">
          <div className="appMobileImage">
            <img src={soporte} alt="" className="spaceservices"/>
          </div>

          <div className="appMobileContent">
            <div>
              <div className="container">
                <div className="subtitle-principal-mobile spaceservices">
                  <h2>Technical support</h2>
                </div>
              </div>

              <h4 id="txt">Raise the level of your organization</h4>

              <p>
                On-site or remote support service to attend to incidents, server
                and datacenter operation, temporary replacement equipment, etc.{" "}
              </p>

              {/*<LinkRouter to="/soporte" className="container botonAppMobile">
                <div className="btnfluor">
                  <a href="">info</a>
                </div>
</LinkRouter>*/}

            </div>
          </div>
        </div>
      </section>
      <section id="principal">
        <div id="divprincipal">
          <div className="container1">
            <h4>About us</h4>
            <h1>our formula</h1>
            <p id="parraf">
              Our way of working and achieving results is based on three
              fundamental pillars that are transversal to all disciplines and
              areas we address.
            </p>
          </div>
          <div className="container2">
            <div className="point">
              <h3>We know the business of our clients</h3>
              <p>
                We are interested in knowing the business of our clients and
                understand what their priorities and their neuralgic points are.
              </p>
            </div>
            <div className="point">
              <h3>Trust and integrity</h3>
              <p>
                We believe it is fundamental to build trust with our clients to
                streamline all processes and maximize efficiency and
                independence.
              </p>
            </div>
            <div className="point">
              <h3>experience and service</h3>
              <p>
                Our experience and focus on service allow us to choose
                appropriate solutions for each case.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Servicios;

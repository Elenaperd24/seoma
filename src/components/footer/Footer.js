import React from 'react'
import './footer.css'
import { Link as Linkrouter } from 'react-router-dom'; 

const Footer = () => {



  return (
    <>



      <footer className="footer">

        <div className='footer_toLink'>

          <div><Linkrouter className="footer__link" to="/">Home</Linkrouter></div>

          <div><Linkrouter className="footer__link" to="/product">Products</Linkrouter></div>

          <div><Linkrouter className="footer__link" to="/servicios">Services</Linkrouter></div>
          {/* <div><Linkrouter className="footer__link" to="/nosotros">Nosotros</Linkrouter></div> */}

        </div>

        <div className="footer"><b>SEOMA Web Design</b> It is an integral development in conjunction with MINDHUB </div>

        <div className="footer__copyright">
          <small>&copy;GROUP A</small>
        </div>

      </footer>



    </>
  )
}

export default Footer
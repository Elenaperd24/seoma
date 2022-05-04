import React, { useState, useEffect} from "react"
import ReactDOM from "react-dom"
import './prueba.css'

const stub=[
{image:'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/37331/image-upload/Porto%20-%20Multipurpose%20Responsive%20HTML%20Template-intro.jpg'}, 
{image:'https://s.tmimgcdn.com/scr/800x500/51500/plantilla-web-pro-gratis-sitio-web-pro_51576-0-original.jpg'},
{image:'https://nestrategia.com/wp-content/uploads/2019/01/diseno-paginas-web-madrid-profesionales-1.jpg'},
{image:'https://wwwhatsnew.com/wp-content/uploads/2017/08/Mashup-Template-730x416.jpg'},
{image:'https://i.pinimg.com/originals/1d/e4/ad/1de4ad2669f3e3c085089b05703129e5.jpg'}
]



const HeroGothic = () => {
  
  const [ active, setActive ] = useState(0)
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  
  function handleSetActive(e){
    console.log(e.currentTarget.dataset)
    setActive(parseInt(e.currentTarget.dataset.slide))
  }

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 50) {
      // do your stuff here for left swipe
      //console.log('left swipe')
      setActive((state)=> state + 1 > stub.length ? null : state + 1)
    }

    if (touchStart - touchEnd < -50) {
      // do your stuff here for right swipe
      //console.log('right swipe');
      setActive((state)=>state - 1 < 0 ? null : state - 1)
    }
  }
  
  return (
    <>
    <div className="hero-gothic accelerated"
      onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
      onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
      onTouchEnd={() => handleTouchEnd()}
      >
      { 
        stub.map((i,index) => {
          return (
          <div 
            key={index} 
            data-slide={index} 
            onClick={(e)=>handleSetActive(e)} 
            role="button" 
            className={`hero-gothic__slide ${ parseInt(active) === parseInt(index) ? 'active' : ''}`}
            >
            <img src={i.image} />
             
          </div>
          )
        })
      }
    </div>
    </>
  )
}

export default HeroGothic
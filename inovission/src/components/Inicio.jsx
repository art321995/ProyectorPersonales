import Carousel from "./slider/Carrusel"
import CarouselSec from "./slider/CarruselSec"


const Inicio = () => {
  return (
   <>
      <div className="Carosul">
        <Carousel />
      </div>
      <h2 className="TituloCarosulSec">Tratamientos</h2>
      <div className="CarosulSec">
        <CarouselSec />
      </div>
   
   </>
      
  )
}

export default Inicio
import { Link } from "react-router-dom";


const Paquetes = () => {
  return (
    <div >
        <h1>Paquetes</h1>
        <div className="ContenedorPaquetes">
          <div className="PaqueteEco">
            <img src="src/components/paqutes/img/PaqEco.png"></img>
            <img src="src/components/paqutes/img/DesPaqEco.png"></img>
            <Link className="btnMeInteresa" to="https://bit.ly/3t2KxE0">Me interesa</Link>
          </div>
          <div className="PaqueteEco+">
            <img src="src/components/paqutes/img/PaqEco+.png"></img>
            <img src="src/components/paqutes/img/DesPaqEco+.png"></img>
            <Link className="btnMeInteresa" to="https://bit.ly/3t2KxE0">Me interesa</Link>
          </div>
          <div className="PaquetePlus">
            <img src="src/components/paqutes/img/PaqPlus.png"></img>
            <img src="src/components/paqutes/img/DesPaqPlus.png"></img>
            <Link className="btnMeInteresa" to="https://bit.ly/3t2KxE0">Me interesa</Link>
          </div>
          <div className="PaquetePremium">
            <img src="src/components/paqutes/img/PaqPremium.png"></img>
            <img src="src/components/paqutes/img/DesPaqPrem.png"></img>
            <Link className="btnMeInteresa" to="https://bit.ly/3t2KxE0">Me interesa</Link>
          </div>
        </div>
        <div className="ImagenFinal">
              <img src="src/components/paqutes/img/MejoraLentes.png"></img>
        </div>
        
    </div>
  )
}

export default Paquetes;
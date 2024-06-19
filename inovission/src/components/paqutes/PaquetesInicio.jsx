import { Link } from "react-router-dom";


const PaquetesInicio = () => {
  return (
    <div className="contenedor-paquetes">
    <div>
        <img src="src/components/paqutes/img/PaqEco.png"></img>
        <Link className="btnVerMas" to="/paquetes">Ver mas</Link>
    </div>
    <div>
        <img src="src/components/paqutes/img/PaqEco+.png"></img>
        <Link className="btnVerMas" to="/paquetes">Ver mas</Link>
    </div>
    <div>
        <img src="src/components/paqutes/img/PaqPlus.png"></img>
        <Link className="btnVerMas" to="/paquetes">Ver mas</Link>
    </div>
    <div>
        <img src="src/components/paqutes/img/PaqPremium.png"></img>
        <Link className="btnVerMas" to="/paquetes">Ver mas</Link>
    </div>
</div>
  )
}

export default PaquetesInicio;
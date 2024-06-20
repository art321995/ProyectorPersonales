import { Link } from "react-router-dom";

const handleClick = () => {
    // Desplazar la página hacia arriba
    window.scrollTo(0, 0);
};

const PaquetesInicio = () => {
  return (
    <div className="contenedor-paquetes" >
    <div>
        <img src="src/components/paqutes/img/PaqEco.png"></img>
        <Link className="btnVerMas" to="/paquetes" onClick={handleClick}>Ver mas</Link >
    </div>
    <div>
        <img src="src/components/paqutes/img/PaqEco+.png"></img>
        <Link className="btnVerMas" to="/paquetes" onClick={handleClick}>Ver mas</Link>
    </div>
    <div>
        <img src="src/components/paqutes/img/PaqPlus.png"></img>
        <Link className="btnVerMas" to="/paquetes" onClick={handleClick}>Ver mas</Link>
    </div>
    <div>
        <img src="src/components/paqutes/img/PaqPremium.png"></img>
        <Link className="btnVerMas" to="/paquetes" onClick={handleClick}>Ver mas</Link>
    </div>
</div>
  )
}

export default PaquetesInicio;
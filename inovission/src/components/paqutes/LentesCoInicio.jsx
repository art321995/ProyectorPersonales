import { Link } from "react-router-dom";

const handleClick = () => {
  // Desplazar la página hacia arriba
  window.scrollTo(0, 0);
};

const LentesCoInicio = () => {
  return (
    <div className="contenedor-lentescontacto">
        <div className="imgPrincipal">
            <img src="src/components/paqutes/img/LentesCoInicio.png" ></img>
        </div>
        <div className="imgSecundaria">
            <img src="src/components/paqutes/img/AirOptix.png"></img>
            <div className="PrecioInicio">$990</div>
            <Link className="btnVerMas" to="/contacto" onClick={handleClick}>Ver mas</Link>
        </div>
        <div className="imgSecundaria">
            <img src="src/components/paqutes/img/AirOptixHydra.png"></img>
            <div className="PrecioInicio">$1090</div>
            <Link className="btnVerMas" to="/contacto" onClick={handleClick}>Ver mas</Link>
        </div>
    </div>
  )
}

export default LentesCoInicio;
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo(0, 0);
};

const LentesCoInicio = () => {
  return (
    <div className="contenedor-lentescontacto">
        <div className="imgPrincipal">
          <Link to="/contacto"><img src="src/components/paqutes/img/LentesCoInicio.png" ></img></Link>
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
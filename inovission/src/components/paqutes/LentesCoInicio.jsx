import { Link } from "react-router-dom";


const LentesCoInicio = () => {
  return (
    <div className="contenedor-lentescontacto">
        <div className="imgPrincipal">
            <img src="src/components/paqutes/img/LentesCoInicio.png" ></img>
        </div>
        <div className="imgSecundaria">
            <img src="src/components/paqutes/img/AirOptix.png"></img>
            <div className="PrecioInicio">$990</div>
            <Link className="btnVerMas" to="/">Ver mas</Link>
        </div>
        <div className="imgSecundaria">
            <img src="src/components/paqutes/img/AirOptixHydra.png"></img>
            <div className="PrecioInicio">$990</div>
            <Link className="btnVerMas" to="/">Ver mas</Link>
        </div>
    </div>
  )
}

export default LentesCoInicio;
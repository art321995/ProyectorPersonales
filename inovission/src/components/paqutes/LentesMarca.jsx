import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo(0, 0);
};

const LentesMarca = () => {
  return (
    <div className="MarcasDisenador">
        <div className="Marcas">
            <Link to="/armazones" onClick={handleClick}><img src="src/components/paqutes/img/vogue.png" className="vogue"></img></Link>
            <img src="src/components/paqutes/img/Ray-Banpe.png"></img>
            <img src="src/components/paqutes/img/Versace.png"></img>
            <img src="src/components/paqutes/img/Carrera.png"></img>
        </div>
    </div>
  )
}

export default LentesMarca;
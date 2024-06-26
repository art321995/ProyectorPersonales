import { NavLink } from "react-router-dom";

const enviarMensajeWhatsApp = () => {
    const mensaje = '¡Hola! Estoy interesado en agendar mi examen gratis.';
    const url = `https://wa.me/+5213339900323/?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
};
const HeaderNav = () => {
  return (
    <header className="header">
        <div className="logo">
            <a href="/"><img src="Iconoazul.png"></img></a>   
        </div>
      
      <nav>
            <ul>
                <li className={({isActive}) => isActive ? "active" : ""}>
                    <NavLink to="/inicio" >Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/paquetes">Paquetes</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Lentes De Contacto</NavLink>
                </li>
                <li>
                    <NavLink to="/">Armazones</NavLink>
                </li>
                <li>
                    <NavLink to="/sabermas">Saber Mas...</NavLink>
                </li>
                <div className="imgcalendario"><img src="./images/calendario.png"></img></div>
                <a className="btnexamen" href="#" onClick={enviarMensajeWhatsApp}>Agenda Examen Gratis!</a>
                
            </ul>
        </nav>
    </header>
    
    
  )
}

export default HeaderNav;
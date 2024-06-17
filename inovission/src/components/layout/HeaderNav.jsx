import { Link, NavLink } from "react-router-dom";



const HeaderNav = () => {
  return (
    <header className="header">
        <div className="logo">
            <a href="/"><img src="Iconoazul.png"></img></a>   
        </div>
      
      <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/galeria">Paquetes</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
                <li>
                    <NavLink to="/Ubicacion">Ubicacion</NavLink>
                </li>
                <div className="imgcalendario"><img src="./images/calendario.png"></img></div>
                <Link className="btnexamen" to="https://web.whatsapp.com/">Agenda Examen Gratis!</Link>
                
            </ul>
        </nav>
    </header>
    
    
  )
}

export default HeaderNav;
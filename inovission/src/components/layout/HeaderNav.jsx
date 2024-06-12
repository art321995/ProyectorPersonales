import { Link, NavLink } from "react-router-dom";



const HeaderNav = () => {
  return (
    <header className="header">
        <div className="logo">
            <a href="/"><img src="Icono.jpg"></img></a>
            <Link className="btnexamen" to="https://web.whatsapp.com/"> Agenda Examen Gratis!</Link>
        </div>
      
      <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/galeria">Galeria</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
                <li>
                    <NavLink to="/Ubicacion">Ubicacion</NavLink>
                </li>
                
                
            </ul>
        </nav>
    </header>
    
    
  )
}

export default HeaderNav;
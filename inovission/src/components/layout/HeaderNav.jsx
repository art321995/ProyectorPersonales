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
                    <NavLink to="/paquetes">Paquetes</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Lentes De Contacto</NavLink>
                </li>
                <li>
                    <NavLink to="/sabermas">Saber Mas...</NavLink>
                </li>
                <div className="imgcalendario"><img src="./images/calendario.png"></img></div>
                <Link className="btnexamen" to="https://bit.ly/3t2KxE0">Agenda Examen Gratis!</Link>
                
            </ul>
        </nav>
    </header>
    
    
  )
}

export default HeaderNav;
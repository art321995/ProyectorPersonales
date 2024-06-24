import { Link } from "react-router-dom"

const Footer = () => {
    return (
      <footer className='footer'>
        <div className="informacion">
            <div className="direccion">
              <h4 className="titulo">Contacto</h4>
              <p className="calle">Calle Carrillo Puerto #18 <br/>Tlaquepaque Centro <br/>Jalisco, Mexico, 45500</p>
              <p className="telefono">+52 33 4304 4558</p>
              <p className="correo">optica.innovision01@gmail.com</p>
            </div>
            <div className="horario">
                <h6>Horarios</h6>
                <p>L-V De: 10:30 a 19:00 hrs</p> <p>Sáb De: 10:00 a 15:00 hrs</p>
                <a href="/"><img src="Iconoazul.png"></img></a> 
            </div>
        </div>
        
        <div className="redes">
          <Link to="https://www.instagram.com/opticainnovision?fbclid=IwAR2u7Ft4zNTy7EdPmmCPXV1hHgtwulX2szlb80_2_3bFiNCHJAfmFMiCJWk" className="instagram"><img src="./images/instagrampe.png"></img></Link>
          <Link to="https://www.facebook.com/profile.php?id=100077087454182&locale=es_LA" className="facebook"><img src="./images/facebookpe.png"></img></Link>
          <Link to="https://www.tiktok.com/@optica.innovision?_t=8nMb88fSvWn&_r=1" className="tiktok"><img src="./images/tiktokpe.png"></img></Link>
        </div>
        <div className="MR">
          Optica InnoVision &copy; Since 2022 
        </div>
          
          
      </footer>
    )
  }
  
  export default Footer;
import { Link } from "react-router-dom"

const Footer = () => {
    return (
      <footer className='footer'>
        <div className="redes">
          <Link to="https://www.instagram.com/opticainnovision?fbclid=IwAR2u7Ft4zNTy7EdPmmCPXV1hHgtwulX2szlb80_2_3bFiNCHJAfmFMiCJWk" className="instagram"><img src="./images/instagrampe.png"></img></Link>
          <Link to="https://www.facebook.com/profile.php?id=100077087454182&locale=es_LA" className="facebook"><img src="./images/facebookpe.png"></img></Link>
          <Link to="" className="tiktok"><img src="./images/tiktokpe.png"></img></Link>
        </div>
          Optica InnoVision &copy; Since 2022
          
      </footer>
    )
  }
  
  export default Footer
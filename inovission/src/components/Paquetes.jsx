
const enviarMensajeWhatsApp = (mensaje) => {
  const telefono = '+5213339900323';
  const url = `https://wa.me/${telefono}/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
};

const handleClick = (mensaje) => {
  enviarMensajeWhatsApp(mensaje);
};

const Paquetes = () => {
  return (
    <div >
        <h1>Paquetes</h1>
        <div className="ContenedorPaquetes">
          <div className="PrimerosPaquetes">

            <div className="PaqueteEco">
              <img src="src/components/paqutes/img/PaqEco.png"></img>
              <img src="src/components/paqutes/img/DesPaqEco.png"></img>
              <a className="btnMeInteresa" href="#" onClick={() => 
              handleClick('¡Hola! Estoy interesado en los lentes del Paquete Eco')}>Me interesa</a>
            </div>

            <div className="PaqueteEcomas">
              <img src="src/components/paqutes/img/PaqEco+.png"></img>
              <img src="src/components/paqutes/img/DesPaqEco+.png"></img>
              <a className="btnMeInteresa" href="#" onClick={() => 
              handleClick('¡Hola! Estoy interesado en los lentes del Paquete Eco+')}>Me interesa</a>
            </div>

          </div>

            <div className="SegundosPaquetes">
                <div className="PaquetePlus">
                  <img src="src/components/paqutes/img/PaqPlus.png"></img>
                  <img src="src/components/paqutes/img/DesPaqPlus.png"></img>
                  <a className="btnMeInteresa" href="#" onClick={() => 
                  handleClick('¡Hola! Estoy interesado en los lentes del Paquete Plus')}>Me interesa</a>
                </div>

                <div className="PaquetePremium">
                  <img src="src/components/paqutes/img/PaqPremium.png"></img>
                  <img src="src/components/paqutes/img/DesPaqPrem.png"></img>
                  <a className="btnMeInteresa" href="#" onClick={() => 
                  handleClick('¡Hola! Estoy interesado en los lentes del Paquete Premium')}>Me interesa</a>
            </div>
          </div>
        </div>
          
        <div className="ImagenFinal">
              <img src="src/components/paqutes/img/MejoraLentes.png"></img>
        </div>
        
  
    </div>
  )
}

export default Paquetes;
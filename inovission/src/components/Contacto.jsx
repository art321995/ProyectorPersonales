
const enviarMensajeWhatsApp = (mensaje) => {
  const telefono = '+5213339900323';
  const url = `https://wa.me/${telefono}/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
};

const handleClick = (mensaje) => {
  enviarMensajeWhatsApp(mensaje);
};

const Contacto = () => {
  return (
    <div className="Contacto">
      <h1>Lentes De Contacto</h1>
      <div className="imgPrimerFila">
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/Biofinity.png"></img>
          <div className="PrecioInicio">$1090 </div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biofinity')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/BiofinityToric.png"></img>
          <div className="PrecioInicio">$1290</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biofinity Toric')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/BiofinityMultifocal.png"></img>
          <div className="PrecioInicio">$1690</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biofinity Multifocal')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/BiofinityXRToric.png"></img>
          <div className="PrecioInicio">$2590</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biofinity XR Toric')}>Me interesa</a>
        </div>
      </div>
      <div className="imgPrimerFila">
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/AcuvueMoist.png"></img>
          <div className="PrecioInicio">$990</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Acuvue Moist')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/AcuvueOasys.png"></img>
          <div className="PrecioInicio">$990</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Acuvue Oasys')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/AcuvueOasysToric.png"></img>
          <div className="PrecioInicio">$1090</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Acuvue Oasys Toric')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/AcuvueVita.png"></img>
          <div className="PrecioInicio">$1090</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Acuvue Vita')}>Me interesa</a>
        </div>
      </div>
      <div className="imgPrimerFila">
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/AcuvueVitaToric.png"></img>
          <div className="PrecioInicio">$1490</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Acuvue Vita Toric')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/AirOptix.png"></img>
          <div className="PrecioInicio">$990</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Air Optix')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/AirOptixHydra.png"></img>
          <div className="PrecioInicio">$1090</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Air Optix Hydragel')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/AirOptixHydraToric.png"></img>
          <div className="PrecioInicio">$1590</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Air Optix Hydragel Toric')}>Me interesa</a>
        </div>
      </div>
      <div className="imgPrimerFila">
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/FreshLook.png"></img>
          <div className="PrecioInicio">$490</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto FreshLook')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/Biomedics.png"></img>
          <div className="PrecioInicio">$990</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biomedics')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/BiomedicsNow.png"></img>
          <div className="PrecioInicio">$690</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biomedics Now')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/BiomedicsToric.png"></img>
          <div className="PrecioInicio">$1090</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Biomedics Toric')}>Me interesa</a>
        </div>
      </div>
      <div className="imgUltimaFila">
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/Soflens.png"></img>
          <div className="PrecioInicio">$690</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Soflens')}>Me interesa</a>
        </div>
        <div className="contenedorimagenes">
          <img src="src/components/paqutes/img/SoflensToric.png"></img>
          <div className="PrecioInicio">$990</div>
          <a className="btnMeInteresa" href="#" onClick={() => 
            handleClick('¡Hola! Estoy interesado en los lentes de contacto Soflens Toric')}>Me interesa</a>
        </div>
      </div>
    </div>
  )
}

export default Contacto;



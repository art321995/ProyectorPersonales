
const About = () => {
  return (
    <section className="container mx-auto mb-8" id="about" >
      <h2 className="mb-1 text-center text-3xl tracking-tighter lg:text-4xl">Acerca De Nosotros</h2>
      <div className="mb-10 h-2 w-36 bg-yellow-600 m-auto"></div>
      <div className="flex flex-wrap">
        <div className="w-full px-2 lg:w-1/2">
          <h4 className="text-2xl tracking-tighter lg:text-4xl">¡ Bienvenidos a Dulceria Imperial !</h4>
          <p className="m-4 text-md leading-relaxed tracking-tight lg:max-w-xl">
            En Dulceria Imperial, nos apasiona endulzar tus momentos especiales con los sabores más irresistibles. 
            Desde nuestra fundación en el año 2020, hemos estado comprometidos en ofrecer una amplia variedad de dulces, chocolates,  
            productos de reporteria, regalos y botanas de la mejor calidad.
          </p>
          <p className="m-4 text-md leading-relaxed tracking-tight lg:max-w-xl">
          Nuestra misión es brindarte una experiencia dulce única.
          </p>
          <p className="m-4 text-md leading-relaxed tracking-tight lg:max-w-xl">
            Además, creemos que los dulces no son solo para disfrutar en días festivos; Son para cada día, cada sonrisa y cada ocasión 
            especial. Por eso, nuestro equipo trabaja con dedicación para ofrecerte un servicio cercano y atento, asegurándonos de 
            que encuentres justo lo que necesitas.
          </p>
          <p className="m-4 text-md leading-relaxed tracking-tight lg:max-w-xl">
          Ya sea para una fiesta, un regalo, o simplemente para darte un capricho, en Dulceria Imperial estamos aquí para endulzar tu vida, 
          <strong className="text-yellow-600"> Porque la vida es mejor con dulces!</strong>
          </p>
        </div>
        <div className="w-full lg:w-1/2 md:w-1">
          <img src="./img/Abut.jpg" className="rounded-3xl pr-4 pb-4"></img>
        </div>
      </div>
      
    </section>
  )
}

export default About;

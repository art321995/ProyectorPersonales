

const Brands = () => {
  return (
    <section className="container mx-auto mb-8 mt-20" id="brands" >
      <h2 className="mb-1 text-center text-3xl tracking-tighter lg:text-4xl">Marcas Que Manejamos</h2>
      <div className="mb-2 h-2 w-36 bg-yellow-600 m-auto"></div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
        <img src="./img/Marca1.png" className="m-auto w-1/2"></img>
        <img src="./img/Marca2.png" className="m-auto"></img>
        <img src="./img/Marca3.png" className="m-auto"></img>
        <img src="./img/Marca4.png" className="m-auto w-1/2"></img>
        <img src="./img/Marca10.png" className="m-auto"></img>
        <img src="./img/Marca5.png" className="m-auto w-2/3"></img>
        <img src="./img/Marca6.png" className="m-auto w-2/3"></img>
        <img src="./img/Marca7.png" className="m-auto"></img>
        <img src="./img/Marca8.png" className="m-auto"></img>
        <img src="./img/Marca9.png" className="m-auto"></img>
      </div>
    </section>
  )
}

export default Brands

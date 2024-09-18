
const Pinatas = () => {
  return (
    <section className="container mx-auto mb-8 mt-20" id="brands" >
        <h2 className="mb-1 text-center text-3xl tracking-tighter lg:text-4xl">Piñatas</h2>
        <div className="mb-10 h-2 w-36 bg-yellow-600 m-auto"></div>
        <div className="flex flex-wrap">
        <div className="w-full px-2">
                <p className="m-auto p-10 text-3xl text-center leading-loose">Contamos con una gran existencia de Piñatas 
                    para entrega inmediata o con la opcion de realizar Piñatas personalizadas, 
                    solo compartenos una foto y te la <a href="#" className="text-yellow-600 hover:underline">Cotizamos!</a>
                </p>
            </div>
            <div className="w-full px-2">
                <img></img>
            </div>
            
        </div>
        
    </section>
  )
}

export default Pinatas;
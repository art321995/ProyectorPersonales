
const Pinatas = () => {
  return (
    <section className="container mx-auto mb-8 mt-20" id="pinatas" >
        <h2 className="mb-1 text-center text-3xl tracking-tighter lg:text-4xl">Piñatas</h2>
        <div className="lg:mb-10 h-2 w-20 bg-yellow-600 m-auto md:mb-2"></div>
        <div className="flex flex-wrap">
        <div className="w-full px-2 tracking-tighter">
                <p className="m-auto p-10 lg:text-3xl text-center leading-loose">Contamos con una gran existencia de Piñatas 
                    para entrega inmediata o con la opcion de realizar Piñatas personalizadas, 
                    solo compartenos una foto y te la <a href="#" className="text-yellow-600 font-bold hover:underline">Cotizamos!</a>
                </p>
            </div>
            <div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-5" >
                <a href="#"><img src="./img/Pinata1.jpg" alt="Pinata1" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a href="#"><img src="./img/Pinata2.jpg" alt="Pinata2" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a href="#"><img src="./img/Pinata3.jpg" alt="Pinata3" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a href="#"><img src="./img/Pinata4.jpg" alt="Pinata4" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a href="#"><img src="./img/Pinata5.jpg" alt="Pinata5" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a href="#"><img src="./img/Pinata6.jpg" alt="Pinata6" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a href="#"><img src="./img/Pinata7.jpg" alt="Pinata7" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a href="#"><img src="./img/Pinata8.jpg" alt="Pinata8" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a href="#"><img src="./img/Pinata9.jpg" alt="Pinata9" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a href="#"><img src="./img/Pinata10.jpg" alt="Pinata10" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
            </div>
        </div>
        
    </section>
  )
}

export default Pinatas;
import { motion } from "framer-motion";


const Mor = () => {
  return (
    <section className="container mx-auto mb-8 mt-20" id="mor">
        <motion.div
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{ duration: 2, delay: 0.2}}
        >
            <h2 className="mb-1 text-center text-3xl tracking-tighter lg:text-4xl">Más...</h2>
            <div className="h-2 w-20 bg-yellow-600 m-auto mb-10"></div>
        </motion.div>
        
        <motion.div 
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 2, delay: 0.2}}
            className="grid grid-cols-2 lg:gap-16 gap-2 p-4 md:grid-cols-4">
                <div className="text-center items-center">
                    <img className="rounded-2xl" src="./img/Botana.jpg"></img>
                    <h4 className="lg:text-2xl text-xl font-bold lg:py-4 py-2 text-yellow-600">- Botana -</h4>
                    <p>Churros - Papas - Cacahuates - Semillas - Gomitas</p>
                </div><div className="text-center items-center">
                    <img className="rounded-2xl" src="./img/Desechables.jpg"></img>
                    <h4 className="lg:text-2xl text-xl font-bold lg:py-4 py-2 text-yellow-600">- Desechables -</h4>
                    <p>Platos - Vasos - Servilletas - Bolsas - Cubiertos - Charolas</p>
                </div>
                <div className="text-center items-center">
                    <img className="rounded-2xl" src="./img/Velas.jpg"></img>
                    <h4 className="lg:text-2xl text-xl font-bold lg:py-4 py-2 text-yellow-600">- Velas -</h4>
                    <p>Velas de chispas - Feliz Cumpleaños - Mágicas - Números</p>
                </div>
                <div className="text-center items-center">
                    <img className="rounded-2xl" src="./img/Letreros.jpg"></img>
                    <h4 className="lg:text-2xl text-xl font-bold lg:py-4 py-2 text-yellow-600">- Letreros -</h4>
                    <p>Banderin - Banner Metalico y Mate - De Cortina - Led - Letras en Globo</p>
                </div>
        </motion.div>
        <motion.div 
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 2, delay: 0.2}}
            className="grid grid-cols-2 lg:gap-16 gap-2 p-4 md:grid-cols-4">
            <div className="text-center items-center">
                <img className="rounded-2xl" src="./img/Globos.jpg"></img>
                <h4 className="lg:text-2xl text-xl font-bold lg:py-4 py-2 text-yellow-600">- Globos -</h4>
                <p>Látex - Metálicos - Foil - De Número - Con Temática</p>
            </div><div className="text-center items-center">
                <img className="rounded-2xl" src="./img/Regalos.jpg"></img>
                <h4 className="lg:text-2xl text-xl font-bold lg:py-4 py-2 text-yellow-600">- Regalos -</h4>
                <p>Juguetes - Termos - Plumones - Balones - Audífonos - Carteras</p>
            </div>
            <div className="text-center items-center">
                <img className="rounded-2xl" src="./img/Reposteria.jpg"></img>
                <h4 className="lg:text-2xl text-xl font-bold lg:py-4 py-2 text-yellow-600">- Reposteria -</h4>
                <p>Harinas - Crema Batida - Coberturas - Concentrados - Colorantes - Capacillos</p>
            </div>
            <div className="text-center items-center">
                <img className="rounded-2xl" src="./img/Galletas.jpg"></img>
                <h4 className="lg:text-2xl text-xl font-bold lg:py-4 py-2 text-yellow-600">- Galletas -</h4>
                <p>Surtido - Birotito - Polvorón - Orejas</p>
            </div>
        </motion.div>
    </section>
  )
}

export default Mor;
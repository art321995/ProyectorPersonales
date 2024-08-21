import { DISHES } from "../constants"
import Platillos from "./Platillos"

const CartaPlatillos = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
        <h2 className="mb-8 text-center text-3xl tracking-tighter">Nuestros Platillos</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {DISHES.map((project, index) =>(
               <Platillos key={index} project={project} /> 
            ))}
        </div>
    </section>
  )
}

export default CartaPlatillos
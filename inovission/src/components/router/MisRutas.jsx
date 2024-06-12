import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HeaderNav from "../layout/HeaderNav";
import Footer from "../layout/Footer";
import Inicio from "../Inicio";
import Galeria from "../Galeria";
import Contacto from "../Contacto";
import Ubicacion from "../Ubicacion";


const MisRutas = () => {

    return(
        <BrowserRouter>
            <HeaderNav />
            <hr/>

            <section className="content">
                <Routes>
                    <Route path="/" element={<Navigate to="/inicio" />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/galeria" element={<Galeria />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/ubicacion" element={<Ubicacion />} />
                    <Route path="*" element={
                        <div className="page">
                            <h1 className="heading" >Error 404 Not Found</h1>
                        </div>} />
                </Routes>

            </section>
            <hr/>        
            <Footer />
        </BrowserRouter>
    )
}

export default MisRutas;
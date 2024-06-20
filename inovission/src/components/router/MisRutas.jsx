import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HeaderNav from "../layout/HeaderNav";
import Footer from "../layout/Footer";
import Inicio from "../Inicio";
import Contacto from "../Contacto";
import Paquetes from "../Paquetes";
import SaberMas from "../SaberMas";


const MisRutas = () => {

    return(
        <BrowserRouter>
            <HeaderNav />

            <section className="content">
                <Routes>
                    <Route path="/" element={<Navigate to="/inicio" />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/paquetes" element={<Paquetes />} />
                    <Route path="/sabermas" element={<SaberMas />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="*" element={
                        <div className="page">
                            <h1 className="heading" >Error 404 Not Found</h1>
                        </div>} />
                </Routes>

            </section>       
            <Footer />
        </BrowserRouter>
    )
}

export default MisRutas;
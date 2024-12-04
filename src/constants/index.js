import project1 from "../assets/img/Proyecto1.jpg";
import project2 from "../assets/img/Proyecto2.jpg";
import project3 from "../assets/img/Proyecto3.jpg";
import project4 from "../assets/img/Proyecto4.jpg";
import project5 from "../assets/img/Proyecto5.png";
import project6 from "../assets/img/Proyecto6.jpg";

export const HERO_CONTENT = `Apasionado desarrollador Front-End Junior con una habilidad especial para crear aplicaciones web responsivas. 
                             He perfeccionado mis habilidades en tecnologías Front-End como HTML, CSS, JavaScritp y frameworks como React.
                             Motivado para aprender y crecer en un entorno colaborativo y dinámico, aportando soluciones creativas y 
                             efectivas a los desafíos de desarrollo web.`;

export const ABOUT_TEXT = `Soy un desarrollador Front-End Junior dedicado y versátil con pasión por crear soluciones eficientes y fáciles de usar 
                           para aplicaciones web. Cuento con experiencia con variedad de tecnologías, incluidos React, Next.js, Node.js,
                           SASS, Tailwind y una noción con MongoDB y Firebase. Mi viaje en el desarrollo web comenzó con una profunda 
                           curiosidad por cómo funcionan las cosas, y ha evolucionado hasta convertirse en una carrera en la que me 
                           esfuerzo continuamente por aprender y adaptarse a nuevos desafíos a lo cual e aplicado hasta el día de hoy 
                           en proyectos personales. Prospero en entornos colaborativos y disfruto resolviendo problemas complejos para 
                           entregar soluciones de alta calidad. Fuera de la programación, disfruto mantenerme activo y explorar nuevas
                           tecnologías.`;

export const EXPERIENCES = [
  {
    year: "2019 - Actualmente",
    role: "Field Service Engineer",
    company: "Honeywell",
    description: `Reparaciones a nivel de software y hardware en Hand Held - Reparaciones a nivel de software y hardware en Impresoras portátiles Bluetooth -
                  Cierre de reportes en CRM - Validación de tickets - Validación de contratos de los equipos a reparar - 
                  Cierre de reportes en SAP - Trabajo en Campo - Trabajo Remoto - Carga de versiones Android y Windows Mobile`,
    technologies: ["SAP", "CRM", "Android", "Windows Mobile"],
  },
  {
    year: "2015 - 2019",
    role: "Ingeniero de Sopote e Implementaciones",
    company: "Pegasus Control",
    description: `Soporte Técnico a clientes - Implementador de Software y Hardware en campo - Implementador de Software vía remota - 
                  Impartidor de Cursos - Soporte Remoto - Mantenimientos preventivo y correctivo a PC - Seguimiento a casos asignados - Ciclos de Pruebas -
                  Visita de clientes  para obtener la necesidad y asesoramiento del tipo de solución que requiere - 
                  Analizar los requerimientos de clientes para así diseñar soluciones específicas.`,
    technologies: ["SGCWeb"],
  },
  {
    year: "2014 - 2015",
    role: "Ingeniero de Sistemas",
    company: "La Bodega del Bebe",
    description: `Actualizar las versiones del sistema - Revision  y  elaboración de facturas, importe, proveedores, clientes y modelos - 
                  Coordinar los mantenimientos a los equipos de cómputo de la empresa - Realizar los pedidos a los proveedores - 
                  Elaborar reportes para las diferentes áreas de la empresa - Apoyar en la recepción de mercancía - 
                  Mantener actualizada la información del sistema de la página web.`,
    technologies: ["Punto Zero", "labodegadelbebe.mx"],
  },
];

export const PROJECTS = [
  {
    title: "Optica Innovision",
    image: project1,
    description:"Sitio para Optica Innovision",
    technologies: ["vite", "HTML", "CSS", "React", "Node.js", "Formik", "Yup", "Responsive"],
    url:"https://opticainnovisionaem08.netlify.app/",
  },
  {
    title: "Inmobiliaria CasasMX",
    image: project5,
    description:"Sitio Creado para una Inmobiliaria",
    technologies: ["NextJs", "Tailwind", "React", "shadcn/ui", "TypeScript", "Responsive"],
    url:"https://inmobiliariaaem08.netlify.app/",
  },
  {
    title: "Lista de Super",
    image: project2,
    description:"Sitio creado para uso personal como un TODOList",
    technologies: ["vite", "HTML", "React", "Tailwind", "Node.js", "Responsive"],
    url: "https://lista-super-aem1508.netlify.app/",
  },
  {
    title: "Restaurante MX",
    image: project6,
    description:"Sitio creado para un resturante",
    technologies: ["vite", "React", "Tailwind", "Node.js", "Responsive"],
    url: "https://restaurantemxaem08.netlify.app/",
  },
  {
    title: "Dulceria Imperial",
    image: project3,
    description:"Sitio web para una Duleria",
    technologies: ["vite","HTML", "React", "Tailwind", "Node.js", "Responsive"],
    url:"https://dulceriaimperial.netlify.app",
  },
  {
    title: "Login",
    image: project4,
    description:"Sitio de Login conectada a Firebase",
    technologies: ["vite","HTML", "React", "CSS", "Node.js", "firebase"],
    url:"https://login-with-firebase-art08.netlify.app/",
  },
];

export const CONTACT = {
  address: "3 de Junio #263, Col. San Rafel, Guadalajara, Jal.",
  phone: "+52 33 16 11 01 06",
  email: "art270112@gmail.com",
};
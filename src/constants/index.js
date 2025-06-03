import project1 from "../assets/img/Proyecto1.jpg";
import project2 from "../assets/img/Proyecto2.jpg";
import project3 from "../assets/img/Proyecto3.jpg";
import project4 from "../assets/img/Proyecto4.jpg";
import project5 from "../assets/img/Proyecto5.png";
import project6 from "../assets/img/Proyecto6.jpg";
import project7 from "../assets/img/Proyecto7.png";
import project8 from "../assets/img/Proyecto8.png";
import project9 from "../assets/img/Proyecto9.png";

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
    role: "Ingeniero de Soporte e Implementaciones",
    company: "Pegasus Control",
    description: `Soporte Técnico a clientes - Implementador de Software y Hardware en campo - Implementador de Software vía remota - 
                  Impartidor de Cursos - Soporte Remoto - Mantenimientos preventivo y correctivo a PC - Seguimiento a casos asignados - Ciclos de Pruebas -
                  Visita de clientes  para obtener la necesidad y asesoramiento del tipo de solución que requiere - 
                  Analizar los requerimientos de clientes para así diseñar soluciones específicas.`,
    technologies: ["SGCWeb", "Android", "iOS", "CRM"],
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

export const EXPERIENCES_EN = [
  {
    year: "2019 - At the moment",
    role: "Field Service Engineer",
    company: "Honeywell",
    description: `Software and hardware repairs for handheld devices - Software and hardware repairs for Bluetooth portable printers - 
                  Closing reports in CRM - Ticket validation - Contract validation for equipment to be repaired - Closing reports in SAP - 
                  Field work - Remote work - Uploading Android and Windows Mobile versions`,
    technologies: ["SAP", "CRM", "Android", "Windows Mobile"],
  },
  {
    year: "2015 - 2019",
    role: "Support and Implementation Engineer",
    company: "Pegasus Control",
    description: `Technical Support for clients - Field Software and Hardware Implementer - Remote Software Implementer -
                  Course Provider - Remote Support - Preventive and corrective PC maintenance - Follow-up on assigned cases - Testing cycles -
                  Visit clients to determine their needs and provide advice on the type of solution required -
                  Analyze client requirements to design specific solutions.`,
    technologies: ["SGCWeb", "Android", "iOS", "CRM"],
  },
  {
    year: "2014 - 2015",
    role: "Systems engineer",
    company: "La Bodega del Bebe",
    description: `Update system versions - Review and prepare invoices, including amounts, suppliers, customers, and templates -
                  Coordinate maintenance of the company's computer equipment - Place orders with suppliers -
                  Prepare reports for different areas of the company - Support the receipt of merchandise -
                  Keep the website's system information up-to-date.`,
    technologies: ["Punto Zero", "labodegadelbebe.mx"],
  },
];



export const PROJECTS = [
  {
    title: "Optica Innovision",
    image: project1,
    description:"Sitio para Optica Innovision",
    technologies: ["Vite", "HTML", "CSS", "React", "Node.js", "Formik", "Yup", "Responsive"],
    url:"https://opticainnovisionaem08.netlify.app/",
  },
  {
    title: "Disney Clone",
    image: project7,
    description:"Se realiza Clone de la pagina de Disney Plus",
    technologies: ["Vite", "HTML", "CSS", "React", "Node.js", "Responsive"],
    url:"https://disneycloneart1508.netlify.app/",
  },
  {
    title: "Inmobiliaria CasasMX",
    image: project5,
    description:"Sitio Creado para una Inmobiliaria",
    technologies: ["NextJs", "Tailwind", "React", "shadcn/ui", "TypeScript", "Responsive"],
    url:"https://inmobiliariaaem08.netlify.app/",
  },
  {
    title: "Banco borasBank",
    image: project8,
    description:"Sitio para una institucion financiera",
    technologies: ["NextJs", "Tailwind", "React", "TypeScript", "Responsive"],
    url:"https://bankaem08.netlify.app/",
  },
  {
    title: "Lista de Super",
    image: project2,
    description:"Sitio creado para uso personal como un TODOList",
    technologies: ["Vite", "HTML", "React", "Tailwind", "Node.js", "Responsive"],
    url: "https://lista-super-aem1508.netlify.app/",
  },
  {
    title: "Restaurante MX",
    image: project6,
    description:"Sitio creado para un resturante",
    technologies: ["Vite", "React", "Tailwind", "Node.js", "Responsive"],
    url: "https://restaurantemxaem08.netlify.app/",
  },
  {
    title: "Dulceria Imperial",
    image: project3,
    description:"Sitio web para una Dulceria",
    technologies: ["Vite","HTML", "React", "Tailwind", "Node.js", "Responsive"],
    url:"https://dulceriaimperial.netlify.app",
  },
  {
    title: "Curriculum Vitae",
    image: project9,
    description:"Sitio web para un Curriculum Vitae en Español e Inlges",
    technologies: ["Vite","HTML", "React", "Tailwind", "i18Next", "Responsive"],
    url:"https://portafoliolraem08.netlify.app/",
  },
  {
    title: "Login",
    image: project4,
    description:"Sitio de Login conectada a Firebase",
    technologies: ["Vite","HTML", "React", "CSS", "Node.js", "Firebase"],
    url:"https://login-with-firebase-art08.netlify.app/",
  },
];

export const PROJECTS_EN = [
  {
    title: "Optica Innovision",
    image: project1,
    description:"Site for Optica Innovision",
    technologies: ["Vite", "HTML", "CSS", "React", "Node.js", "Formik", "Yup", "Responsive"],
    url:"https://opticainnovisionaem08.netlify.app/",
  },
  {
    title: "Disney Clone",
    image: project7,
    description:"Disney Plus page clone made",
    technologies: ["Vite", "HTML", "CSS", "React", "Node.js", "Responsive"],
    url:"https://disneycloneart1508.netlify.app/",
  },
  {
    title: "Real Estate CasasMX",
    image: project5,
    description:"Site Created for a Real Estate Agency",
    technologies: ["NextJs", "Tailwind", "React", "shadcn/ui", "TypeScript", "Responsive"],
    url:"https://inmobiliariaaem08.netlify.app/",
  },
  {
    title: "Bank borasBank",
    image: project8,
    description:"Site for a financial institution",
    technologies: ["NextJs", "Tailwind", "React", "TypeScript", "Responsive"],
    url:"https://bankaem08.netlify.app/",
  },
  {
    title: "Super List",
    image: project2,
    description:"Site created for personal use as a TODOList",
    technologies: ["Vite", "HTML", "React", "Tailwind", "Node.js", "Responsive"],
    url: "https://lista-super-aem1508.netlify.app/",
  },
  {
    title: "MX Restaurant",
    image: project6,
    description:"Site created for a restaurant",
    technologies: ["Vite", "React", "Tailwind", "Node.js", "Responsive"],
    url: "https://restaurantemxaem08.netlify.app/",
  },
  {
    title: "Imperial Candy Store",
    image: project3,
    description:"Website for a candy store",
    technologies: ["Vite","HTML", "React", "Tailwind", "Node.js", "Responsive"],
    url:"https://dulceriaimperial.netlify.app",
  },
  {
    title: "Curriculum Vitae",
    image: project9,
    description:"Website for a Curriculum Vitae in Spanish and English",
    technologies: ["Vite","HTML", "React", "Tailwind", "i18Next", "Responsive"],
    url:"https://portafoliolraem08.netlify.app/",
  },
  {
    title: "Login",
    image: project4,
    description:"Login site connected to Firebase",
    technologies: ["Vite","HTML", "React", "CSS", "Node.js", "Firebase"],
    url:"https://login-with-firebase-art08.netlify.app/",
  },
];


export const CONTACT = {
  address: "Guadalajara, Jalisco",
  phone: "+52 33 16 11 01 06",
  email: "art270112@gmail.com",
};
import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpeg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Platillo", targetId: "dishes" },
  { text: "Acerca De", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertis", targetId: "expertise" },
  { text: "Reseñas", targetId: "review" },
  { text: "Contacto", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Espaguetis a la Carbonara",
    description: "Pasta cremosa con tocino y queso",
  },
  {
    image: dish2,
    title: "Pollo Tikka Masala",
    description: "Curry indio con pollo tierno en salsa picante",
  },
  {
    image: dish3,
    title: "Ensalada Caprese",
    description: "Tomates frescos, mozzarella y albahaca con glaseado balsámico",
  },
  {
    image: dish4,
    title: "Rollo de Sushi",
    description: "Surtido de mariscos y verduras envueltos en algas y arroz",
  },
  {
    image: dish5,
    title: "Pastel Lava de Chocolate",
    description: "Pastel de chocolate decadente con un centro pegajoso",
  },
  {
    image: dish6,
    title: "Ensalada Griega",
    description: "Lechuga crujiente, aceitunas, queso feta y aderezo picante",
  },
  {
    image: dish7,
    title: "Pad Tailandés",
    description: "Fideos de arroz salteados con camarones, tofu y maní",
  },
  {
    image: dish8,
    title: "Pato Pekín",
    description: "Pato crujiente con tortitas, pepino y salsa hoisin",
  },
  {
    image: dish9,
    title: "Carne Wellington",
    description: "Filete de ternera tierno envuelto en masa con champiñones y hierbas",
  },
  {
    image: dish10,
    title: "Tiramisu",
    description: "Postre italiano con capas de galletas bañadas en café y mascarpone",
  },
];

export const ABOUT = {
  header: "¡Nos encanta cocinar!",
  content:
    "En Restaura creemos que la buena comida va más allá del sabor; cuenta una historia de dedicación y creatividad. Desde las creaciones exclusivas de nuestro chef hasta nuestro atento servicio, cada detalle está cuidado para garantizar que su visita sea nada menos que excepcional. Ya sea que esté saboreando nuestro famoso Tikka Kebab o explorando nuestro variado menú inspirado en sabores globales, cada plato es una celebración del sabor y la innovación. Únase a nosotros en un viaje culinario donde cada bocado deja una impresión duradera. Experimente Restaura, donde cada comida es una obra maestra."};

export const MISSION =
  "En nuestro restaurante, nuestra misión es crear experiencias gastronómicas deliciosas y memorables.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italiana",
    description:
      "Experimente los sabores de Italia con nuestra exquisita cocina italiana, que ofrece recetas tradicionales y platos contemporáneos.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanesa",
    description:
      "Deléitese con el arte de la excelencia culinaria japonesa, que ofrece una fusión de sabores clásicos y modernos.",
  },
  {
    number: "03.",
    image: indian,
    title: "India",
    description:
      "Deléitese con los ricos y diversos sabores de la India con un menú que celebra la herencia culinaria del país.",
  },
];

export const REVIEW = {
  name: "Jorge Toledo",
  profession: "Critico Gastronómico",
  content:
    "“Como crítico gastronómico experimentado, mis expectativas siempre son altas cuando entro en un nuevo establecimiento de comida. Restaura, con su exterior sencillo y su interior elegantemente diseñado, prometió una experiencia culinaria única desde el momento en que entré. Y debo decir que superó mis expectativas.”",
};

export const CONTACT = [
  { key: "address", value: "Direccion: Plaza Corporativa, P.º de los Virreyes 45-Local V16, Puerta de Hierro, 45116 Zapopan, Jal. " },
  { key: "phone", value: "Telefono: +52 33 3113 2146" },
  { key: "email", value: "Email: contact@restaurant.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
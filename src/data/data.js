const nombre = "Nombre Apellido";

export { nombre };


const experiencia = [
  {
    puesto: "Desarrollador Web",
    empresa: "Empresa XYZ",
    periodo: "Enero 2020 - Presente",
    descripcion:
      "Responsable del desarrollo y mantenimiento de aplicaciones web utilizando React y Node.js. Colaboré con equipos multifuncionales para diseñar soluciones escalables y mejorar la experiencia del usuario.",
  },
  {
    puesto: "Desarrollador Front-End",
    empresa: "Empresa ABC",
    periodo: "Junio 2018 - Diciembre 2019",
    descripcion:
      "Desarrollador Front-End en Empresa ABC Desarrollé interfaces de usuario responsivas y optimizadas para diversas aplicaciones web. Trabajé estrechamente con diseñadores para implementar diseños atractivos y funcionales.",
  },
];

export { experiencia };

const links_contacto = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  whatsapp: "https://wa.me/1234567890",
  mail: "mailto:hola@gmail.com",
};

export { links_contacto };

const links_proyectos = {
  proyecto1: "",
};

export { links_proyectos };


// Información personal//
const info_personal={
  nombre_completo: "Nombre Apellido",
  introduccion : "Pequeña introducción sobre mí",
  descripcion: "Soy un desarrollador apasionado por la tecnología y el desarrollo de software. Me especializo en crear aplicaciones web eficientes y escalables, siempre buscando aprender nuevas tecnologías y mejorar mis habilidades.",
  titulo_profesional: "Desarrollador Full Stack",
  ubicacion: "Ciudad, País",
  email: "correopropio@gmail.com",
  telefono: "+1234567890",
};

export { info_personal };

const habilidades = [
  "JavaScript",
  "React",
  "Node.js",
  "HTML & CSS",
  "Git & GitHub",
  "Java",
  "Spring Boot",
];

export { habilidades };


// Información de proyectos //
const proyectos = [
  {
    title: "MetaMapa",
    description: "MetaMapa es una plataforma colaborativa diseñada para la gestión y visualización geográfica de eventos o hechos históricos y culturales. El sistema permite a los usuarios explorar contenidos mediante un mapa interactivo y organizar la información en colecciones temáticas.",
    anio : 2024,
    rol: "Desarrollador Full Stack",
    image: "/assets/img/projects/metamapa.png",
    link: "/projects/proyecto1",
    github: "https://github.com",
    tecnologies: ["java","springboot","mysql","hibernate","html5","css3", "thymeleaf",],
  },
  {
    title: "Otro Proyecto",
    description: "Descripción breve del Proyecto Uno.",
    image: "/assets/img/projects/metamapa.png",
    link: "/projects/proyecto1",
    github: "https://github.com",
    tecnologies: ["react", "css3", "html5", "git", "javascript", "typescript"],
  },
];

export { proyectos };

const nombre = "Nombre Apellido";

export { nombre };

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
};

export { links_contacto };

const links_proyectos = {
  proyecto1: "",
};

export { links_proyectos };

const proyectos = [
  {
    title: "MetaMapa",
    description: "El sistema donde cada hecho cuenta",
    image: "/assets/img/projects/metamapa.png",
    link: "/projects/proyecto1",
    github: "https://github.com",
    tecnologies: ["java","springboot","mysql","hibernate","html5","css3", "github", "thymeleaf",],
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

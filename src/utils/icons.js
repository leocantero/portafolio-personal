
//Versión con manejo de excepciones
export const getTechIconV1 = (tech) => {
  if (!tech) return null;
  const t = tech.toLowerCase().trim().replace(/\s+/g, "").replace(".", "");

  // Solo anotamos lo que NO cumple la regla general
  const exceptions = {
    "java": "java/java-original-wordmark.svg",
    "springboot": "spring/spring-original.svg",
    "js": "javascript/javascript-original.svg",
    "cpp": "cplusplus/cplusplus-original.svg"
  };

  // Si es una excepción, la usamos. Si no, construimos la estándar.
  const path = exceptions[t] || `${t}/${t}-original.svg`;

  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;
};


//Generico
export const getTechIconV2 = (tech) => {
  if (!tech) return null;

  const name = tech.toLowerCase().trim().replace(/\s+/g, "").replace(".", "");

  // 2. Construimos la URL siguiendo el estándar de Devicon:
  // /icons/nombre/nombre-original.svg
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
};



// diccionario específico para casos especiales
export const getTechIconV3 = (tech) => {
  if (!tech) return null;
  const t = tech.toLowerCase().trim();
  if (t.includes("react")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
  if (t.includes("node")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
  if (t.includes("javascript") || t === "js") return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
  if (t.includes("css")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
  if (t.includes("html")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";

  if (t.includes("github")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
  if (t.includes("java") && t.includes("spring")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg";
  if (t.includes("java")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
  return null;
};





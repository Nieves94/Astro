const signos = [
    { nombre: "Tauro", elemento: "tierra" },
    { nombre: "Virgo", elemento: "tierra" },
    { nombre: "Capricornio", elemento: "tierra" },
    { nombre: "Cancer", elemento: "agua" },
    { nombre: "Escorpio", elemento: "agua" },
    { nombre: "Piscis", elemento: "agua" },
    { nombre: "Geminis", elemento: "aire" },
    { nombre: "Libra", elemento: "aire" },
    { nombre: "Acuario", elemento: "aire" },
    { nombre: "Aries", elemento: "fuego" },
    { nombre: "Leo", elemento: "fuego" },
    { nombre: "Sagitario", elemento: "fuego" },
  ];
  
  let signosAgua = signos.filter((signo) => {
    return signo.elemento === "agua";
  });
  
  let signosFuego = signos.filter((signo) => {
    return signo.elemento === "fuego";
  });
  
  let signosAire = signos.filter((signo) => {
    return signo.elemento === "aire";
  });
  
  let signosTierra = signos.filter((signo) => {
    return signo.elemento === "tierra";
  });
  
  let compatibilidad = [
    {
      capricornio: {
        capricornio: "100%",
        acuario: "55%",
        piscis: "36%",
        aries: "87%",
        tauro: "00%",
        geminis: "66%",
        cancer: "85%",
        leo: "7%",
        virgo: "83%",
        libra: "45%",
        escorpio: "30%",
        sagitario: "93%",
      },
    },
  
    {
      acuario: {
        capricornio: "100%",
        acuario: "50%",
        piscis: "60%",
        aries: "87%",
        tauro: "100%",
        geminis: "50%",
        cancer: "85%",
        leo: "7%",
        virgo: "60%",
        libra: "45%",
        escorpio: "30%",
        sagitario: "63%",
      },
    },
    {
      piscis: {
        capricornio: "100%",
        acuario: "50%",
        piscis: "60%",
        aries: "87%",
        tauro: "100%",
        geminis: "50%",
        cancer: "85%",
        leo: "7%",
        virgo: "60%",
        libra: "45%",
        escorpio: "30%",
        sagitario: "63%",
      },
    },
    {
      aries: {
        capricornio: "100%",
        acuario: "50%",
        piscis: "60%",
        aries: "87%",
        tauro: "100%",
        geminis: "50%",
        cancer: "85%",
        leo: "7%",
        virgo: "60%",
        libra: "45%",
        escorpio: "30%",
        sagitario: "63%",
      },
    },
    {
      tauro: {
        capricornio: "100%",
        acuario: "50%",
        piscis: "60%",
        aries: "87%",
        tauro: "100%",
        geminis: "50%",
        cancer: "85%",
        leo: "7%",
        virgo: "60%",
        libra: "45%",
        escorpio: "30%",
        sagitario: "63%",
      },
    },
    {
      geminis: {
        capricornio: "100%",
        acuario: "50%",
        piscis: "60%",
        aries: "87%",
        tauro: "100%",
        geminis: "50%",
        cancer: "85%",
        leo: "7%",
        virgo: "60%",
        libra: "45%",
        escorpio: "30%",
        sagitario: "63%",
      },
    },
    {
      cancer: {
        capricornio: "100%",
        acuario: "50%",
        piscis: "60%",
        aries: "87%",
        tauro: "100%",
        geminis: "50%",
        cancer: "85%",
        leo: "7%",
        virgo: "60%",
        libra: "45%",
        escorpio: "30%",
        sagitario: "63%",
      },
    },
    {
      leo: {
        capricornio: "100%",
        acuario: "50%",
        piscis: "60%",
        aries: "87%",
        tauro: "100%",
        geminis: "50%",
        cancer: "85%",
        leo: "7%",
        virgo: "60%",
        libra: "45%",
        escorpio: "30%",
        sagitario: "63%",
      },
    },
    {
      virgo: {
        capricornio: "100%",
        acuario: "50%",
        piscis: "60%",
        aries: "87%",
        tauro: "100%",
        geminis: "50%",
        cancer: "85%",
        leo: "7%",
        virgo: "60%",
        libra: "45%",
        escorpio: "30%",
        sagitario: "63%",
      },
    },
    {
      libra: {
        capricornio: "100%",
        acuario: "50%",
        piscis: "60%",
        aries: "87%",
        tauro: "100%",
        geminis: "50%",
        cancer: "85%",
        leo: "7%",
        virgo: "60%",
        libra: "45%",
        escorpio: "30%",
        sagitario: "63%",
      },
    },
    {
      escorpio: {
        capricornio: "100%",
        acuario: "50%",
        piscis: "60%",
        aries: "87%",
        tauro: "100%",
        geminis: "50%",
        cancer: "85%",
        leo: "7%",
        virgo: "60%",
        libra: "45%",
        escorpio: "30%",
        sagitario: "63%",
      },
    },
    {
      sagitario: {
        capricornio: "100%",
        acuario: "50%",
        piscis: "60%",
        aries: "87%",
        tauro: "100%",
        geminis: "50%",
        cancer: "85%",
        leo: "7%",
        virgo: "60%",
        libra: "45%",
        escorpio: "30%",
        sagitario: "63%",
      },
    },
  ];
  
  
  
  const botonDeCapricornio = document.getElementById("capricornio");
  const botonDeAcuario = document.getElementById("acuario");
  const botonDePiscis = document.getElementById("piscis");
  const botonDeAries = document.getElementById("aries");
  const botonDeTauro = document.getElementById("tauro");
  const botonDeGeminis = document.getElementById("geminis");
  const botonDeCancer= document.getElementById("cancer");
  const botonDeLeo = document.getElementById("leo");
  const botonDeVirgo = document.getElementById("virgo");
  const botonDeLibra = document.getElementById("libra");
  const botonDeEscorpio = document.getElementById("escorpio");
  const botonDeSagitario = document.getElementById("sagitario");
  const botonAnalizar = document.getElementById("botonAnalizar");
  
  
  let botones = document.querySelectorAll(".signo");
  
  function verCompatibilidadesDeUnSigno(signoClickeado) {
    let compatibilidadDeEsteSigno = compatibilidad.find(
      (signo) => signo[signoClickeado]
    );
    let listaDeCompatibilidad = Object.values(compatibilidadDeEsteSigno)[0];
    let keysDeCompatibilidad = Object.keys(listaDeCompatibilidad);
    let values = Object.values(listaDeCompatibilidad);
      console.log(listaDeCompatibilidad)
    for (let i = 0; i < keysDeCompatibilidad.length; i++) {
      const keys = keysDeCompatibilidad[i];
      const porcentaje = values[i];
  
      document.write(`<br>${keys}:</br> ${porcentaje}`);
      
      
    }
  
  
  }
  
  for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", () =>
      verCompatibilidadesDeUnSigno(botones[i].value)
    );
  }
  
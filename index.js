let nombre;

let idx;

const respuestasUsuario = [];

const respuestasRandom = [];

const options = document.getElementsByClassName("options");

document.querySelector("#formNombre").addEventListener("submit", (event) => {
  event.preventDefault();

  nombre = document.getElementById("nombre").value;

  idx = 0;

  primeraPregunta = preguntas[idx];

  document.getElementById("titulo").innerHTML = primeraPregunta.pregunta;
  document.getElementById("imagen").setAttribute("src", primeraPregunta.img);

  for (let i = 0; i < primeraPregunta.respuestas.length; i++) {
    options[i].innerHTML = primeraPregunta.respuestas[i];
  }

  document.getElementById("pregunta-actual").innerHTML = `${idx + 1}/10`;

  document.getElementById("bienvenido").remove();

  document.getElementById("preguntas").classList.remove("ocultar");
});

document.querySelector("#seleccion").addEventListener("click", (event) => {
  if (event.target.classList.contains("card__form")) {
    return;
  }

  quitarClasesBtn();

  const titulo = document.getElementById("titulo").innerHTML;

  event.target.classList.add("seleccionado");

  const respuestaActual = respuestasUsuario.find((x) => x.pregunta === titulo);

  document.getElementById("boton-siguiente").classList.remove("ocultar");

  if (!respuestaActual) {
    respuestasUsuario.push({
      pregunta: titulo,
      respuesta: event.target.innerHTML,
    });

    return;
  }

  respuestaActual.respuesta = event.target.innerHTML;
});

document.querySelector("#ba").addEventListener("click", (event) => {
  const btn = document.getElementById("boton-siguiente").classList;

  btn.contains("ocultar") ? btn.remove("ocultar") : btn.add("ocultar");
});

document
  .querySelector("#boton-siguiente")
  .addEventListener("click", (event) => {
    if (preguntas.length - 1 === idx) {
      document.getElementById("preguntas").remove();

      // document.getElementById("nombreFinal").innerHTML = nombre;

      let contador = 0;

      respuestasUsuario.forEach((el) => {
        const pregunta = respuestasRandom.find(
          (x) => x.pregunta === el.pregunta
        );

        if (pregunta.respuesta === el.respuesta) {
          contador++;
        }
      });

      document.getElementById("acertadas").innerHTML = Math.round(
        Math.random() * (50 - 5) + 5
      );

      document.getElementById("final").classList.remove("ocultar");

      return;
    }
    idx++;

    preguntaActualizar = preguntas[idx];

    document.getElementById("boton-siguiente").classList.add("ocultar");

    document.getElementById("titulo").innerHTML = preguntaActualizar.pregunta;
    document
      .getElementById("imagen")
      .setAttribute("src", preguntaActualizar.img);

    for (let i = 0; i < preguntaActualizar.respuestas.length; i++) {
      options[i].innerHTML = preguntaActualizar.respuestas[i];
    }

    document.getElementById("pregunta-actual").innerHTML = `${idx + 1}/10`;

    quitarClasesBtn();
  });

const quitarClasesBtn = () => {
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove("seleccionado");
  }
};

const preguntas = [
  {
    pregunta: "??QU?? N??MERO PUEDE VERSE EN LA IMAGEN?",
    img: "imgs/1.png",
    respuestas: ["15", "11", "17", "19"],
  },
  {
    pregunta: "??TODOS LOS COLORES DE LOS CUADRANTES SON IGUALES?",
    img: "imgs/2.png",
    respuestas: [
      "Si",
      "No, hay 1 diferente.",
      "No, hay 2 diferentes.",
      "No, hay 3 diferentes.",
    ],
  },
  {
    pregunta: "??CU??L DE LAS FILAS POSEEN MAS CANTIDAD DE ROJO?",
    img: "imgs/3.png",
    respuestas: ["1ra", "2da", "3era", "4ta"],
  },
  {
    pregunta: "??CU??L ES EL N??MERO DE LA IMAGEN?",
    img: "imgs/4.png",
    respuestas: ["22", "19", "29", "20"],
  },
  {
    pregunta: "??CU??L CIRCULO NARANJA ES MAS GRANDE?",
    img: "imgs/5.png",
    respuestas: [
      "El de la izquierda.",
      "El de la derecha.",
      "Ninguno",
      "??Qu?? circulos naranjas?",
    ],
  },
  {
    pregunta: "??QUI??N ES LA PERSONA DE LA FOTO?",
    img: "imgs/6.png",
    respuestas: [
      "Isaac Newton",
      "Marilyn Monroe",
      "Albert Einstein",
      "Diego Maradona",
    ],
  },
  {
    pregunta: "??QU?? LETRAS HAY EN LA QUINTA LINEA?",
    img: "imgs/7.png",
    respuestas: ["P E O F D", "F C O P D", "F E C P D", "P E C F D"],
  },
  {
    pregunta: "??LA L??NEA C ES LA CONTINUACI??N DE CUAL L??NEA?",
    img: "imgs/8.png",
    respuestas: [
      "De la A.",
      "De la B.",
      "De ninguna.",
      "En el medio de las dos.",
    ],
  },
  {
    pregunta: "??QU?? VES?",
    img: "imgs/9.png",
    respuestas: [
      "Una pareja teniendo relaciones.",
      "Delfines.",
      "No distingo nada.",
      "Un pe??asco.",
    ],
  },
  {
    pregunta: "??QU?? N??MERO SE ENCUENTRA EN LA IMAGEN?",
    img: "imgs/10.png",
    respuestas: ["71", "7", "571", "No hay ning??n n??mero"],
  },
];

preguntas.forEach((el) => {
  respuestasRandom.push({
    pregunta: el.pregunta,
    respuesta: el.respuestas[Math.floor(Math.random() * el.respuestas.length)],
  });
});

console.log({ respuestasRandom });

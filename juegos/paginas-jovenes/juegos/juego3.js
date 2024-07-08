class JuegoPlanetas {
    constructor() {
        this.planetas = ["planetatierra.jpg", "neptuno.jpg", "marte.jpg", "saturno.jpg", "venus.jpg", "mercurio.jpg", "jupiter.jpg", "urano.jpg"];
        this.correctas = [2, 2, 1, 1, 0, 2, 1, 0];
        this.opciones = [
            ["NEPTURNO", "JUPITER", "TIERRA"],
            ["MARTE", "VENUS", "NEPTUNO"],
            ["URANO", "MARTE", "MERCURIO"],
            ["TIERRA", "SATURNO", "VENUS"],
            ["VENUS", "MARTE", "URANO"],
            ["JUPITER", "NEPTUNO", "MERCURIO"],
            ["MARTE", "JUPITER", "URANO"],
            ["URANO", "TIERRA", "JUPITER"]
        ];
        this.posActual = 0;
        this.cantidadAcertadas = 0;
    }

    comenzarJuego() {
        this.posActual = 0;
        this.cantidadAcertadas = 0;
        document.getElementById("pantalla-inicial").style.display = "none";
        document.getElementById("pantalla-juego").style.display = "block";
        this.cargarPlaneta();
    }

    cargarPlaneta() {
        if (this.planetas.length <= this.posActual) {
            this.terminarJuego();
        } else {
            this.limpiarOpciones();
            document.getElementById("imgPlaneta").src = "img/" + this.planetas[this.posActual];
            document.getElementById("n0").innerHTML = this.opciones[this.posActual][0];
            document.getElementById("n1").innerHTML = this.opciones[this.posActual][1];
            document.getElementById("n2").innerHTML = this.opciones[this.posActual][2];
        }
    }

    limpiarOpciones() {
        for (let i = 0; i < 3; i++) {
            document.getElementById("n" + i).className = "nombre";
            document.getElementById("l" + i).className = "letra";
        }
    }

    comprobarRespuesta(opElegida) {
        if (opElegida == this.correctas[this.posActual]) {
            document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
            document.getElementById("l" + opElegida).className = "letra letraAcertada";
            this.cantidadAcertadas++;
        } else {
            document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
            document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
            document.getElementById("n" + this.correctas[this.posActual]).className = "nombre nombreAcertada";
            document.getElementById("l" + this.correctas[this.posActual]).className = "letra letraAcertada";
        }
        this.posActual++;
        setTimeout(() => this.cargarPlaneta(), 1000);
    }

    terminarJuego() {
        document.getElementById("pantalla-juego").style.display = "none";
        document.getElementById("pantalla-final").style.display = "block";
        document.getElementById("numCorrectas").innerHTML = this.cantidadAcertadas;
        document.getElementById("numIncorrectas").innerHTML = this.planetas.length - this.cantidadAcertadas;
    }

    volverAlInicio() {
        document.getElementById("pantalla-final").style.display = "none";
        document.getElementById("pantalla-inicial").style.display = "block";
        document.getElementById("pantalla-juego").style.display = "none";
    }
}

const juego = new JuegoPlanetas();

/////////////////////////iformacion planetas////////////////////////
var informacionDetallada = {
    Sol: {
        texto: "El Sol es una estrella, es decir, un cuerpo celeste que brilla con luz propia,compuesto  de hidrógeno y helio a enormes temperaturas en estado de plasma. Es la estrella mas cercana a La Tierra  y de la que depende toda la vida en ella. Concentrada en el Sol encontramos el 99,85% de toda la masa del Sistema Solar. ",
        imagen: "./imgl/sol2.png"
    },
    Mercurio: {
        texto: "Mercurio es uno de los cuatro planetas rocosos o sólidos; es decir, tiene un cuerpo rocoso, como la Tierra. Este planeta es el más pequeño de los cuatro, con un diámetro de 4879 km en el ecuador. Mercurio está formado aproximadamente por un 70% de elementos metálicos y un 30% de silicatos. La densidad de este planeta es la segunda más alta de todo el sistema solar, siendo su valor de 5430 kg/m³, solo un poco menor que la densidad de la Tierra.",
        imagen: "./imgl/mercurio.png"
    },
    Tierra: {
        texto: "Nuestro hogar, el planeta Tierra, es un planeta terrestre y rocoso. Tiene una superficie sólida y activa, con montañas, valles, cañones, llanuras y mucho más. La Tierra es especial porque es un planeta océano, ya que el agua cubre el 70% de su superficie. Nuestra atmósferaestá compuesta, en gran parte, por nitrógeno.",
        imagen: "./imgl/terra.png"
    },
    Marte: {
        texto: "Marte es un planeta desértico y frío. Es la mitad del tamaño de la Tierra, y también recibe el nombre de (planeta rojo). Es rojo por el hierro oxidado que tiene en el suelo. Como la Tierra, Marte tiene estaciones, casquetes polares, volcanes, cañones y clima.",
        imagen: "./imgl/marte.png"
    },
    Jupiter: {
        texto: "Júpiter es el planeta más grande de nuestro sistema solar. Es parecido a una estrella, pero nunca llegó a ser lo suficientemente masiva como para empezar a arder. Está cubierto de rayas de nubes arremolinadas. Tiene fuertes tormentas como la Gran Mancha Roja, que hace cientos de años que dura.",
        imagen: "./imgl/jupi.png"
    },
    Saturno: {
        texto: "Saturno es el sexto planeta del sistema solar y con un radio de 58.232 kilómetros el segundo planeta más grande, solo superado por el colosal Júpiter. Al igual que este se trata de un planeta del tipo gigante gaseoso.",
        imagen: "./imgl/saturnorgh.png"
    },
    Urano: {
        texto: "Urano está compuesto de agua, metano y amoniaco sobre un pequeño centro rocoso. Su atmósfera está hecha de hidrógeno y helio, como Júpiter y Saturno, pero además contiene metano. El metano es lo que le da a Urano el color azul. Urano también tiene anillos tenues.",
        imagen: "./imgl/urano.png"
    },
    Neptuno: {
        texto: "Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones matemáticas. Su nombre fue puesto en honor al dios romano del mar —Neptuno—, y es el cuarto planeta en diámetro y el tercero más grande en masa. Su masa es diecisiete veces la de la Tierra y ligeramente mayor que la de su planeta «gemelo» Urano, que tiene quince masas terrestres y no es tan denso. En promedio, Neptuno orbita el Sol a una distancia de 30,1 ua(Unidades Astronomicas). Su símbolo astronómico es ♆, una versión estilizada del tridente del dios Neptuno.",
        imagen: "./imgl/neptuno2.png"
    },
    Venus: {
        texto: "Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero más pequeño después de Mercurio y Marte. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor (en la Antigua Grecia, Afrodita). Al ser el segundo objeto natural más brillante después de la Luna, puede ser visto en un cielo nocturno despejado a simple vista. Se trata de un planeta interior de tipo rocoso y terrestre, llamado con frecuencia el planeta hermano de la Tierra, ya que ambos son similares en cuanto a tamaño, masa y composición, aunque totalmente diferentes en cuestiones térmicas y atmosféricas (la temperatura media de Venus es de 463,85 °C).",
        imagen: "./imgl/venus.png"
    },
};
function mostrarInformacion(planeta) {
    var informacionPlaneta = document.getElementById('informacionPlaneta');
    var imagenPlaneta = document.getElementById('imagenPlaneta');
    var textoPlaneta = document.getElementById('textoPlaneta');

    var informacion = informacionDetallada[planeta];

    if (informacion) {
        informacionPlaneta.style.display = 'flex';
        informacionPlaneta.style.color = '#fff';
        imagenPlaneta.src = informacion.imagen;
        textoPlaneta.innerText = informacion.texto;
    } else {
        console.error("Información no encontrada para el planeta:", planeta);
    }
}
////////////////////////////////matematicas jovenes///////////////////////////////////////
let ecuaciones = [
    { expresion: '2*2+9(5+6)-9/__ = 100', respuesta: '3' },
    { expresion: '__*2(6+3)= 324', respuesta: '18' },
    { expresion: '320__5*2 =128', respuesta: '/' },
    { expresion: '5x=8x-15', respuesta: 'x=5' },
    { expresion: 'y-5=3y-25', respuesta: 'y=10' },
    { expresion: '8x-4+3x=7x+x+14', respuesta: 'x=6' },
    { expresion: '5y+6y-81=7y+102+65y', respuesta: 'y=-3' },
  ];
  let indiceEcuacionActual = 0;
  document.addEventListener("DOMContentLoaded", function() {
    mostrarEcuacionActual();
  });
  function mostrarEcuacionActual() {
    const ecuacionIncompletaElemento = document.getElementById('ecuacion-incompleta');
    ecuacionIncompletaElemento.textContent = ecuaciones[indiceEcuacionActual].expresion;
  }
  function verificarEcuacion() {
    const inputEcuacion = document.querySelector('.input-ecuacion');
    const respuestaUsuario = inputEcuacion.value.trim();
    const respuestaCorrecta = ecuaciones[indiceEcuacionActual].respuesta;
    if (respuestaUsuario === respuestaCorrecta) {
        mostrarAlerta2('img/correcto.png');
       indiceEcuacionActual++;
       inputEcuacion.value = "";
      if (indiceEcuacionActual < ecuaciones.length) {
        mostrarEcuacionActual();
      } else {
        alert('¡Has completado todas las ecuaciones!');
      }
    } else {
      mostrarAlerta2('img/inco.png');
    }
  }
  
  function mostrarAlerta2(imagenSrc) {
    let divAlerta = document.createElement('div');
    divAlerta.style.position = 'fixed';
    divAlerta.style.top = '120px';
    divAlerta.style.position = 'absolute';
    divAlerta.style.zIndex = '10';
    divAlerta.style.right = '300px';
    divAlerta.style.width = '100%';
    divAlerta.style.height = '100%';
    divAlerta.style.display = 'flex';
    divAlerta.style.alignItems = 'center';
    divAlerta.style.justifyContent = 'center';
    let imagen = document.createElement('img');
    imagen.src = imagenSrc;
    imagen.alt = 'Imagen de alerta';
    divAlerta.appendChild(imagen);
    document.body.appendChild(divAlerta);
    setTimeout(function () {
        divAlerta.style.display = 'none';
    }, 2500);
}


// total de preguntas del juego
const TOTAL_PREGUNTAS = 10;

// variable que me lleva la cantidad de respuestas acertadas
var cantidadAcertadas = 0;

// variable que que controla la pregunta actual. Comienza en -1, porque la primera pregunta es la 0
var numPreguntaActual = -1;

// estructura para saber que pregunta se ha respondido y cual no 
// lo vamos a mantener en un arreglo, i:0 indica que no se a respondido, 1 indica que si se a respondido 
// coloco la cantidad de preguntas que hay, en este caso hay 10 
var estadoPregunta = [0,0,0,0,0,0,0,0,0,0];

// creamos la base de datos de preguntas
const bd_juego = [
    {
        id: `A`,
        pregunta:"¿En qué país nació el físico Albert Einstein?",
        respuesta:"Alemania"
    },
    {
        id: `B`,
        pregunta:"¿Cómo se llama el texto que narra la vida de una persona?",
        respuesta:"biografía"
    },
    {
        id: `C`,
        pregunta:"¿Quién descubrió América?",
        respuesta:"Cristóbal Colón"
    },
    {
        id: `D`,
        pregunta:"¿Cuál es el planeta más cercano al Sol?",
        respuesta:"Mercurio"
    },
    {
        id: `E`,
        pregunta:"¿Cuál es una de las consecuencias del movimiento de rotación de la Tierra?",
        respuesta:"el día y la noche"
    },
    {
        id: `F`,
        pregunta:"Famosa red social creada por Mark Zuckerberg",
        respuesta:"Facebook"
    },
    {
        id: `G`,
        pregunta:"¿Qué fuerza mantiene a los planetas alrededor del Sol?",
        respuesta:"gravedad"
    },
    {
        id: `H`,
        pregunta:"Lenguaje utilizado para la estructura a las páginas web",
        respuesta:"html"
    },
    {
        id: `I`,
        pregunta:"¿En qué estado de la materia se encuentra un cubo de hielo?",
        respuesta:"sólido"
    },
    {
        id: `J`,
        pregunta:"¿Cuál es la estación más calurosa del año?",
        respuesta:"verano"
    },
];

// variables para controlar el tiempo
const timer = document.getElementById("tiempo");
// tiempo del juego en segundos 
const TIEMPO_DEL_JUEGO = 60;
// variable que indica el tiempo restante 
let timeLeft = TIEMPO_DEL_JUEGO;
// variable que maneja el contador
var countdown;

// creamos las letras de la A a la J de forma circular 
const container = document.querySelector(".container");
for(let i=1; i <= TOTAL_PREGUNTAS; i++){
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.textContent = String.fromCharCode(i + 96);
    circle.id = String.fromCharCode(i + 96).toUpperCase();
    container.appendChild(circle);

    const angle = ((i-1) / TOTAL_PREGUNTAS) * Math.PI * 2 - (Math.PI /2);
    const x = Math.round(95 + 120 * Math.cos(angle));
    const y = Math.round(95 + 120 * Math.sin(angle));
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

// evento del botón "comenzar"
var comenzar = document.getElementById("comenzar");
comenzar.addEventListener("click", function(event){
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";

    // Alargamos el tiempo
    largarTiempo(); 
    cargarPregunta();

    // Muestra las instrucciones después de comenzar el juego
    document.getElementById("instrucciones").style.display = "flex";
});

// Modifica el evento del botón "ocultar-instrucciones"
var ocultarInstrucciones = document.getElementById("ocultar-instrucciones");
ocultarInstrucciones.addEventListener("click", function(event){
    // Oculta la pantalla-inicial y la sección de instrucciones
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("instrucciones").style.display = "none";
    // Muestra la pantalla-juego
    document.getElementById("pantalla-juego").style.display = "block";
});

function largarTiempo(){
    countdown = setInterval(()=>{
        // restar un segundo al tiempo restante
        timeLeft--;
        // actualizamos el tiempo con el cronómetro el tiempo restante
        timer.innerText = timeLeft;
        // si el tiempo llega a 0, detener el cronómetro
        if(timeLeft<0){
            clearInterval(countdown);
            //alert("Se acabó el tiempo");
            mostrarPantallaFinal();
        }
    },1000);
}

// funcion que carga las preguntas 
function cargarPregunta(){
    numPreguntaActual++;
    if(numPreguntaActual >= TOTAL_PREGUNTAS){
        numPreguntaActual = 0;
    }

    // debo controlar que todavia hallan preguntas para contestar
    // es decir ver si en el arreglo estadoPreguntas existe algun 0
    if(estadoPregunta.indexOf(0)>=0){
        // ahora debo buscar cual de todas es la que esta sin responder, es decir buscar el primer 0 del arreglo
        while(estadoPregunta[numPreguntaActual]==1){
            numPreguntaActual++;
            if(numPreguntaActual>=TOTAL_PREGUNTAS){
                numPreguntaActual=0;
            }
        } 

        // ahora si busco la pregunta en la base de datos de las preguntas
        document.getElementById("letra-pregunta").textContent = bd_juego[numPreguntaActual].id;
        document.getElementById("pregunta").textContent = bd_juego[numPreguntaActual].pregunta;
        var letra = bd_juego[numPreguntaActual].id;
        document.getElementById(letra).classList.add("pregunta-actual");
    }else{  //significa que ya se han respondido todas las preguntas 
        clearInterval(countdown);
        mostrarPantallaFinal()
    }
}

// detectamos cada vez que haya un cambio en el input para ver cuando se preciona ENTER
// y controlar si lo que ingresó es correcto o no.
var respuesta = document.getElementById("respuesta");
respuesta.addEventListener("keyup", function(event){
    // detectamos si se preciona enter
    if(event.keyCode === 13){
        if(respuesta.value == ""){ // si presiona enter y esta vacío 
            alert("Debe ingresar un valor");
            return;
        }

        // obtengo la respuesta ingresada
        var txtRespuesta = respuesta.value;
        controlarRespuesta(txtRespuesta.toLowerCase());
    }
})

function controlarRespuesta(txtRespuesta){
    // Convertir la respuesta ingresada a minúsculas
    txtRespuesta = txtRespuesta.toLowerCase();

    // Controla si la respuesta es correcta 
    if(txtRespuesta == bd_juego[numPreguntaActual].respuesta.toLowerCase()){
        // Respuesta correcta
        cantidadAcertadas++;

        // Actualiza el estado de la pregunta actual a 1, para indicar que ya está respondida
        estadoPregunta[numPreguntaActual] = 1;

        var letra = bd_juego[numPreguntaActual].id;
        document.getElementById(letra).classList.remove("pregunta-actual");
        document.getElementById(letra).classList.add("bien-respondida");
    }else{
        // Respuesta incorrecta
        estadoPregunta[numPreguntaActual] = 1;
        var letra = bd_juego[numPreguntaActual].id;
        document.getElementById(letra).classList.remove("pregunta-actual");
        document.getElementById(letra).classList.add("mal-respondida");
    }

    // Limpiar el input
    respuesta.value = "";

    // Cargar la próxima pregunta
    cargarPregunta();
}

// Agregar un event listener al botón "Responder"
var botonResponder = document.getElementById("responder");
botonResponder.addEventListener("click", function(event){
    // Obtener la respuesta ingresada
    var txtRespuesta = respuesta.value;

    // Verificar si la respuesta es correcta
    controlarRespuesta(txtRespuesta.toLowerCase());
});

// boton para pasar de pregunta sin contestar 
var pasar = document.getElementById("pasar");
pasar.addEventListener("click", function(event){
    var letra = bd_juego[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");
    cargarPregunta();
})

// mostrar la pantalla final
function mostrarPantallaFinal(){
    document.getElementById("acertadas").textContent = cantidadAcertadas;
    document.getElementById("score").textContent = (cantidadAcertadas * 100) / 10 + "% de acierto";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
}

// botón para recomenzar el juego 
var recomenzar = document.getElementById("recomenzar");
recomenzar.addEventListener("click", function(event){
    numPreguntaActual = -1;
    timeLeft = TIEMPO_DEL_JUEGO;
    timer.innerText = timeLeft;
    cantidadAcertadas = 0;
    estadoPregunta = [0,0,0,0,0,0,0,0,0,0];

    // quito las clases de los círculos
    var circulos = document.getElementsByClassName("circle");
    for(i = 0; i < circulos.length; i++){
        circulos[i].classList.remove("pregunta-actual");
        circulos[i].classList.remove("bien-respondida");
        circulos[i].classList.remove("mal-respondida");
    }

    // Oculta la pantalla final
    document.getElementById("pantalla-final").style.display = "none";

    // Muestra la pantalla del juego
    document.getElementById("pantalla-juego").style.display = "block";

    largarTiempo();
    cargarPregunta();
});

// botón para regresar a la pantalla principal
var regresarInicio = document.getElementById("regresar-inicio");
regresarInicio.addEventListener("click", function(event){
    // Oculta la pantalla final
    document.getElementById("pantalla-final").style.display = "none";

    // Muestra la pantalla inicial
    document.getElementById("pantalla-inicial").style.display = "block";
});

// mostrar sección de instrucciones
// document.getElementById("instrucciones").style.display = "flex";

// tamaño de la imagen
document.getElementById("imagen-instrucciones").style.maxWidth = "80%";
document.getElementById("imagen-instrucciones").style.maxHeight = "80vh";

// fondo oscuro difuminado
document.getElementById("fondo-difuminado").style.background = "rgba(0, 0, 0, 0.8)";
document.getElementById("fondo-difuminado").style.backdropFilter = "blur(5px)"; // Ajusta la intensidad del difuminado según tus necesidades
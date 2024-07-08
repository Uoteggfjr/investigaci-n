let animales = [
    { nombre: "caballo", imagen: "imgl/caballo.jpg" },
    { nombre: "leon" , imagen: "imgl/leon.jpg" },
    { nombre: "elefante", imagen: "imgl/elefante.png" },
    { nombre: "mono", imagen: "imgl/mono.jpg" },
    { nombre: "tortuga", imagen: "imgl/tortuga.jpg" },
    { nombre: "tigre", imagen: "imgl/tigre.jpg" },
    { nombre: "serpiente", imagen: "imgl/serpiente.jpg" },
    { nombre: "gallina", imagen: "imgl/gallina.jpg" },
    { nombre: "chancho", imagen: "imgl/puerco.jpg" },
    { nombre: "toro", imagen: "imgl/toro.jpg" }
];

let nombreAnimalActual = "";

function quitarTildes(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function imagenAleatoria() {
    let indiceAleatorio = Math.floor(Math.random() * animales.length);
    nombreAnimalActual = quitarTildes(animales[indiceAleatorio].nombre.toLowerCase());
    let urlImagen = animales[indiceAleatorio].imagen;
    let divImagen = document.getElementById("imagen");
    divImagen.style.backgroundImage = `url('${urlImagen}')`;
    return nombreAnimalActual;
}

function mostrarAlerta2(imagenSrc) {
    let divAlerta = document.createElement('div');
    divAlerta.style.position = 'fixed';
    divAlerta.style.top = '0';
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

function animalCorrecto() {
    let respuestaElemento = document.getElementById("respuesta");
    let respuesta = quitarTildes(respuestaElemento.value.toLowerCase().trim());
    
    if (respuesta === nombreAnimalActual) {
        mostrarAlerta2('imgl/correcto.png');
        setTimeout(imagenAleatoria, 2500);
        setTimeout(function() {
            respuestaElemento.value = "";
        }, 2500);
    } else {
        mostrarAlerta2('imgl/inco.png');
    }
}

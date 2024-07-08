//script para mostrar la animaion de letras
document.addEventListener('DOMContentLoaded', function () {
    const text ="APRENDE Y JUEGA CON NOSOTROS";
    const animatedText = document.getElementById('animatedText');
    function iniciarAnimacion() {
      animatedText.innerHTML = '';
      animatedText.style.animation = 'none'; 
      void animatedText.offsetWidth; 
      animatedText.style.animation = 'typing 5s steps(40, end)';
      animatedText.innerHTML = text;
    }
    setInterval(iniciarAnimacion, 10000); 
  });

//script para hacer un div donde se pueda introducir la imgen de alerta de la pagina
//principal
function mostrarAlerta(imagenSrc,enlaceDestino) {
    let divAlerta = document.createElement('div');
    divAlerta.style.position = 'fixed';
    divAlerta.style.top = '0';
    divAlerta.style.left = '0';
    divAlerta.style.width = '100%';
    divAlerta.style.height = '100%';
    divAlerta.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    divAlerta.style.display = 'flex';
    divAlerta.style.alignItems = 'center';
    divAlerta.style.justifyContent = 'center';
    let imagen = document.createElement('img');
    imagen.src = imagenSrc;
    imagen.alt = '';
    //script para colocar la imagen y que espere 2.5s y que desapareza 
    divAlerta.appendChild(imagen);
    document.body.appendChild(divAlerta);
    setTimeout(function () {
        divAlerta.style.display = 'none';
        window.location.href = enlaceDestino;
    }, 2500);
}
//este script escucha el evento click en la etiqueta <a> y nos redirige
// al enlace que corresponde 
let enlaces = document.querySelectorAll('a');
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
        event.preventDefault();
    let imagenSrc = enlace.getAttribute('data-imagen-src');
        mostrarAlerta(imagenSrc, enlace.href);
    });
});












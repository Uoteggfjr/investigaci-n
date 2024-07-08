//inicializacion de variables
let tarjetasDestapadas= 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let tiempoRegresivoId = null;


//apuntando a documento html
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);


//funciones
function contarTiempo(){
    tiempoRegresivoId = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo ${timer} segundos`;
        if(timer == 0){
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas()
        }
    },1000)
}

function restart(){
    location.reload();
}

function bloquearTarjetas(){
    for ( let i = 0; i<=15; i++){
        let tarjetasbloqueada = document.getElementById(i);
        tarjetasbloqueada.innerHTML = numeros[i];
        tarjetasbloqueada.disabled = true;

    }
}

//funcion principal
function destapar(id){
    
    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }


    tarjetasDestapadas++;
    console.log(tarjetasDestapadas)


    if(tarjetasDestapadas == 1){
        //mostrar primer numero
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML = primerResultado;


        //deshabilitar primer boton
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas == 2){
        // mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = segundoResultado;


        //deshabiltar segundo boton

        tarjeta2.disabled = true;

        //incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            // encerrar el contador de tarjetas destapadas
            tarjetasDestapadas = 0;

            //aumento de aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 👍😎`;
                mostrarTiempo.innerHTML = `Muy bien 🎉 solo demoraste ${timerInicial - timer} segundos`
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😰`;
            }
        }else{
             //mostrar momentaneamente valores y volver a jugar
             setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
             },800);
        }

    }


    
    
}

///////////////////////////////////////////JUEGO BASES///////////////////////////////////

function base(){
    let seleccion=document.getElementById("opciones").value;
    let numero=parseInt(document.getElementById("numero1").value);
    let resultado=this.operaciones(seleccion,numero);
    document.getElementById("respuesta").innerHTML=`<h3>El resultado es = ${resultado}</h3>`
    }
   function operaciones(seleccion,numero){
        let resultado="";
            //DE BASE 10 A BASE 2
        if(seleccion==="BASE 10 A BASE 2"){
            numero=parseInt(numero,10);
            while(numero>0){
            let residuo=numero%2;
            resultado=residuo+resultado;
            numero=Math.floor(numero/2)
            }
           return resultado
            }
            //DE BASE 10 A BASE 8
            else if(seleccion==="BASE 10 A BASE 8"){
            numero=parseInt(numero,10);
            while(numero>0){
            let residuo=numero%8;
            resultado=residuo+resultado;
            numero=Math.floor(numero/8)
            }
            return resultado
            }
            //DE BASE 10 A BASE 16
            else if(seleccion==="BASE 10 A BASE 16"){
            numero=parseInt(numero,10);
            while(numero>0){
            let residuo=numero%16;
            if (residuo >= 10) {
            resultado = String.fromCharCode('A'.charCodeAt(0) + residuo - 10) + resultado;
            } else {
            resultado=residuo+resultado;}
            numero=Math.floor(numero/16);
            }
            return resultado
            }
             //DE BASE 2 A BASE 10
        if(seleccion==="BASE 2 A BASE 10"){
            numero=parseInt(numero,2);
            while(numero>0){
            let residuo=numero%10;
            resultado=residuo+resultado;
            numero=Math.floor(numero/10);
            }
           return resultado
            }
            //DE BASE 2 A BASE 8
            else if(seleccion==="BASE 2 A BASE 8"){
            numero=parseInt(numero,2);
            while(numero>0){
            let residuo=numero%8;
            resultado=residuo+resultado;
            numero=Math.floor(numero/8)
            }
            return resultado
            }
            //DE BASE 2 A BASE 16
        else if (seleccion === "BASE 2 A BASE 16") {
            numero = parseInt(numero, 2);
            while (numero > 0) {
                let residuo = numero % 16;
                if (residuo >= 10) {
                    resultado = String.fromCharCode('A'.charCodeAt(0) + residuo - 10) + resultado;
                } else {
                    resultado = residuo + resultado;
                }
                numero = Math.floor(numero / 16);
            }
            return resultado.toUpperCase();
        }
    }
        
        
        
class Juego {
    constructor() {
        this.num1 = 0;
        this.num2 = 0;
        this.respuesta = 0;
        this.txt_suma = document.getElementById("suma");
        this.op1 = document.getElementById("op1");
        this.op2 = document.getElementById("op2");
        this.op3 = document.getElementById("op3");
        this.txt_msj = document.getElementById("msj");
        this.txt_resultado = document.getElementById("resultado");

        this.comenzar();
    }

    comenzar() {
        this.txt_resultado.innerHTML = "?";
        this.txt_msj.innerHTML = "";

        this.num1 = Math.round(Math.random() * 9);
        this.num2 = Math.round(Math.random() * 9);
        this.respuesta = this.num1 + this.num2;

        this.txt_suma.innerHTML = `${this.num1} + ${this.num2} = `;

        this.indiceOpCorrecta = Math.round(Math.random() * 2);

        if (this.indiceOpCorrecta === 0) {
            this.op1.innerHTML = this.respuesta;
            this.op2.innerHTML = this.respuesta + 1;
            this.op3.innerHTML = this.respuesta - 1;
        }
        if (this.indiceOpCorrecta === 1) {
            this.op1.innerHTML = this.respuesta - 1;
            this.op2.innerHTML = this.respuesta;
            this.op3.innerHTML = this.respuesta - 2;
        }
        if (this.indiceOpCorrecta === 2) {
            this.op1.innerHTML = this.respuesta + 2;
            this.op2.innerHTML = this.respuesta + 3;
            this.op3.innerHTML = this.respuesta;
        }
    }

    controlarRespuesta(opcionElegida) {
        this.txt_resultado.innerHTML = opcionElegida.innerHTML;
        if (this.respuesta == opcionElegida.innerHTML) {
            this.txt_msj.innerHTML = "EXCELENTE!!";
            this.txt_msj.style.color = "#00FFFF"; 
            this.txt_msj.style.textShadow = "2px 2px 4px rgba(0, 0, 0.5, 0.5)";
            setTimeout(() => this.comenzar(), 2000);
        } else {
            this.txt_msj.innerHTML = "INTENTA DE NUEVO!!";
            this.txt_msj.style.color = "#FF0000";
            this.txt_msj.style.textShadow = "2px 3px 4px rgba(0.5, 0.5, 0.5, 0.5)";
            setTimeout(() => this.limpiar(), 2000);
        }
    }

    limpiar() {
        this.txt_resultado.innerHTML = "?";
        this.txt_msj.innerHTML = "";
    }

    reiniciarJuego() {
        localStorage.removeItem("gameState");
        this.comenzar();
    }
}

const juego = new Juego();
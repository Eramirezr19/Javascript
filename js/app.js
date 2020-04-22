var operandoa;
var operandob;
var operacion;

//Creación de las variables para los botones
var resultado = document.getElementById("display");
var suma = document.getElementById("mas");
var resta = document.getElementById("menos");
var multiplica = document.getElementById("por");
var reset = document.getElementById("on");
var signo = document.getElementById("sign");
var raiz = document.getElementById("raiz");
var divide = document.getElementById("dividido");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cero = document.getElementById("0");
var punto = document.getElementById("punto");
var igual = document.getElementById("igual");

var Calculadora = {

  init: function () {
    //Eventos
    uno.onclick = function (e) { if (resultado.innerHTML=="0") {resultado.textContent=""+"1"
  }else{
    resultado.textContent = resultado.textContent + "1";
  }}
    dos.onclick = function (e) { if (resultado.innerHTML=="0") {resultado.textContent=""+"2"
    }else{
      resultado.textContent = resultado.textContent + "2";
    }}
    tres.onclick = function (e) { if (resultado.innerHTML=="0") {resultado.textContent=""+"3"
    }else{
      resultado.textContent = resultado.textContent + "3";
    }}
    cuatro.onclick = function (e) { if (resultado.innerHTML=="0") {resultado.textContent=""+"4"
    }else{
      resultado.textContent = resultado.textContent + "4";
    }}
    cinco.onclick = function (e) { if (resultado.innerHTML=="0") {resultado.textContent=""+"5"
    }else{
      resultado.textContent = resultado.textContent + "5";
    }}
    seis.onclick = function (e) { if (resultado.innerHTML=="0") {resultado.textContent=""+"6"
    }else{
      resultado.textContent = resultado.textContent + "6";
    }}
    siete.onclick = function (e) { if (resultado.innerHTML=="0") {resultado.textContent=""+"7"
    }else{
      resultado.textContent = resultado.textContent + "7";
    }}
    ocho.onclick = function (e) { if (resultado.innerHTML=="0") {resultado.textContent=""+"8"
    }else{
      resultado.textContent = resultado.textContent + "8";
    }}
    nueve.onclick = function (e) { if (resultado.innerHTML=="0") {resultado.textContent=""+"9"
    }else{
      resultado.textContent = resultado.textContent + "9";
    }}
    cero.onclick = function (e) { if (resultado.innerHTML=="0") {resultado.textContent=""+"0"
    }else{
      resultado.textContent = resultado.textContent + "0";
    }}

    punto.onclick = function (e) {
      resultado.textContent = resultado.textContent + ".";
    }
    reset.onclick = function (e) { if(resultado.innerHTML!="0"){resultado.textContent="0"}else {
      resetear();
    }
    }
    suma.onclick = function (e) {
      operandoa = resultado.textContent;
      operacion = "+";
      limpiar();
    }
    resta.onclick = function (e) {
      operandoa = resultado.textContent;
      operacion = "-";
      limpiar();
    }
    multiplica.onclick = function (e) {
      operandoa = resultado.textContent;
      operacion = "*";
      limpiar();
    }
    divide.onclick = function (e) {
      operandoa = resultado.textContent;
      operacion = "/";
      limpiar();
    }

    igual.onclick = function (e) {
      operandob = resultado.textContent;
      resolver();
    }

  }
}

function limpiar() {
  resultado.textContent = "";
}
function resetear() {
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = 0;
}
function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob)

      break;
    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob)

      break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob)
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob)

      break;
  }
  resetear();
resultado.textContent = res;

}

Calculadora.init();

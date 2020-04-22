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
    uno.onclick = function (e) {
    if (resultado.textContent.length<8) {
      if (resultado.innerHTML=="0") {resultado.textContent=""+"1"
    }else{
    resultado.textContent = resultado.textContent + "1";
    }}}
    dos.onclick = function (e) {
    if (resultado.textContent.length<8) {
      if (resultado.innerHTML=="0") {resultado.textContent=""+"2"
    }else{
    resultado.textContent = resultado.textContent + "2";
    }}}
    tres.onclick = function (e) {
    if (resultado.textContent.length<8) {
      if (resultado.innerHTML=="0") {resultado.textContent=""+"3"
    }else{
    resultado.textContent = resultado.textContent + "3";
    }}}
    cuatro.onclick = function (e) {
    if (resultado.textContent.length<8) {
      if (resultado.innerHTML=="0") {resultado.textContent=""+"4"
    }else{
    resultado.textContent = resultado.textContent + "4";
    }}}
    cinco.onclick = function (e) {
    if (resultado.textContent.length<8) {
      if (resultado.innerHTML=="0") {resultado.textContent=""+"5"
    }else{
    resultado.textContent = resultado.textContent + "5";
    }}}
    seis.onclick = function (e) {
    if (resultado.textContent.length<8) {
      if (resultado.innerHTML=="0") {resultado.textContent=""+"6"
    }else{
    resultado.textContent = resultado.textContent + "6";
    }}}
    siete.onclick = function (e) {
    if (resultado.textContent.length<8) {
      if (resultado.innerHTML=="0") {resultado.textContent=""+"7"
    }else{
    resultado.textContent = resultado.textContent + "7";
    }}}
    ocho.onclick = function (e) {
    if (resultado.textContent.length<8) {
      if (resultado.innerHTML=="0") {resultado.textContent=""+"8"
    }else{
    resultado.textContent = resultado.textContent + "8";
    }}}
    nueve.onclick = function (e) {
    if (resultado.textContent.length<8) {
      if (resultado.innerHTML=="0") {resultado.textContent=""+"9"
    }else{
    resultado.textContent = resultado.textContent + "9";
    }}}
    cero.onclick = function (e) {
    if (resultado.textContent.length<8) {
      if (resultado.innerHTML=="0") {resultado.textContent=""+"0"
    }else{
    resultado.textContent = resultado.textContent + "0";
    }}}

    punto.onclick = function (e) {
      if(resultado.textContent==="0"){
      resultado.textContent+=".";
    }else if(resultado.textContent.indexOf(".")!=-1){
      resultado.textContent+="";
      }else{
      resultado.textContent+=".";
      }
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

    igual.onclick = function (e) { if(count_clic >= 1){
operandoa = resultado.textContent;
resolver();}else{ operandob = resultado.textContent;
  resolver();
}
    }

    signo.onclick = function(e){
      if(signo && resultado.innerHTML != "0"){
          resultado.innerHTML = "-1" * resultado.innerHTML
          }else{
          resultado.innerHTML = resultado.innerHTML.slice(-1);
        }
    }




  }
}

function limpiar() {
  resultado.textContent = "";
  count_clic=0;
}
function resetear() {
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = 0;
  count_clic =0;
}
var count_clic =0;

function contador(){
count_clic +=1;
};

function resolver() {
var res = 0;
contador();
switch (operacion) {
case "+":
if (count_clic <= 1) {
res = parseFloat(operandoa) + parseFloat(operandob)
} else {
res = parseFloat(operandob) + parseFloat(operandoa)
}
break;
case "-":
if (count_clic <= 1) {
res = parseFloat(operandoa) - parseFloat(operandob)
} else {
res = parseFloat(operandoa) - parseFloat(operandob)
}

break;
case "*":
if (count_clic <= 1) {
res = parseFloat(operandoa) * parseFloat(operandob)
} else {
res = parseFloat(operandob) * parseFloat(operandoa)
}
break;
case "/":
if (count_clic<=1) {
res = parseFloat(operandoa) / parseFloat(operandob)
}else{
res = parseFloat(operandoa) / parseFloat(operandob)
}


break;
}

resultado.textContent = res;

display.innerHTML = display.innerHTML.substring(0,8);

}

resetear();

var botones = document.getElementsByClassName("tecla");
for (let i = 0; i < botones.length; i++) {
botones[i].addEventListener("mousedown", function () {
botones[i].style.transform = "scale(.95, .95)";
});
botones[i].addEventListener("mouseup", function () {
botones[i].setAttribute("style", "transform:scale(1, 1)");
});
};







Calculadora.init();

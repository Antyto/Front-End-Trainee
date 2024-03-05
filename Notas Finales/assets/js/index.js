var nombre = document.getElementById("nombre");
nombre.innerHTML = prompt("Ingrese su nombre");
var carrera = document.getElementById("carrera");
carrera.innerHTML = prompt("Ingrese su carrera");

var html1 = document.getElementById("html1");
var html2 = document.getElementById("html2");
var html3 = document.getElementById("html3");
var promedioHtml = document.getElementById("promedioHtml");

var notahtml1 = parseInt(prompt("Ingrese nota 1 [HTML]"));
var notahtml2 = parseInt(prompt("Ingrese nota 2 [HTML]"));
var notahtml3 = parseInt(prompt("Ingrese nota 3 [HTML]"));
html1.innerHTML = notahtml1;
html2.innerHTML = notahtml2;
html3.innerHTML = notahtml3;

promedioHtml.innerHTML = ((notahtml1 + notahtml2 + notahtml3) / 3).toFixed(2);

var css1 = document.getElementById("css1");
var css2 = document.getElementById("css2");
var css3 = document.getElementById("css3");
var promedioCss = document.getElementById("promedioCss")

var notacss1 = parseInt(prompt("Ingrese nota 1 [CSS]"));
var notacss2 = parseInt(prompt("Ingrese nota 2 [CSS]"));
var notacss3 = parseInt(prompt("Ingrese nota 3 [CSS]"));
css1.innerHTML = notacss1;
css2.innerHTML = notacss2;
css3.innerHTML = notacss3;

promedioCss.innerHTML = ((notacss1 + notacss2 + notacss3) / 3).toFixed(2);

var js1 = document.getElementById("js1");
var js2 = document.getElementById("js2");
var js3 = document.getElementById("js3");
var promedioJavaScript = document.getElementById("promedioJs");

var notajavascript1 = parseInt(prompt("Ingrese nota 1 [JavaScript]"));
var notajavascript2 = parseInt(prompt("Ingrese nota 2 [JavaScript]"));
var notajavascript3 = parseInt(prompt("Ingrese nota 3 [JavaScript]"));
js1.innerHTML = notajavascript1;
js2.innerHTML = notajavascript2;
js3.innerHTML = notajavascript3;

promedioJs.innerHTML = ((notajavascript1 + notajavascript2 + notajavascript3) / 3).toFixed(2);
document.getElementById("uno").addEventListener("click",boton1);
document.getElementById("dos").addEventListener("click",boton2);
document.getElementById("tres").addEventListener("click",boton3);
document.getElementById("cuatro").addEventListener("click",boton4);
document.getElementById("cinco").addEventListener("click",boton5);
document.getElementById("seis").addEventListener("click", boton6);
document.getElementById("siete").addEventListener("click",boton7);
document.getElementById("ocho").addEventListener("click",boton8);
document.getElementById("nueve").addEventListener("click",boton9);
document.getElementById("cero").addEventListener("click",boton0);
document.getElementById("botonpunto").addEventListener("click",botonpunto);
document.getElementById("botonMas").addEventListener("click",o1);
document.getElementById("botonMenos").addEventListener("click",o2);
document.getElementById("botonMult").addEventListener("click",o3);
document.getElementById("botonDiv").addEventListener("click",o4);
document.getElementById("botonigual").addEventListener("click",showResult);
document.getElementById("clear").addEventListener("click",botonClear);


function boton1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("uno").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function boton2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("dos").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function boton3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("tres").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function boton4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("cuatro").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function boton5() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("cinco").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function boton6() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("seis").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function boton7() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("siete").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function boton8() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("ocho").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function boton9() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("nueve").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function boton0() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("cero").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function botonpunto() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("botonpunto").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function o1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("botonMas").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function o2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("botonMenos").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function o3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("botonMult").innerHTML;
	document.getElementById('resultado').innerHTML = actual +  sumado
}

function o4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("botonDiv").innerHTML;
	document.getElementById('resultado').innerHTML = actual +  sumado
}

 /*
 function botonClear() {
    pantalla.innerHTML=0; //poner pantalla a 0
    x="0"; //reiniciar número en pantalla
    coma=0; //reiniciar estado coma decimal 
    ni=0 //indicador de número oculto a 0;
    op="no" //borrar operación en curso.
    }
*/
function showResult() {
	let actual = document.getElementById('resultado').innerHTML;
	let suma = actual.indexOf("+");
	let resta = actual.indexOf("-");
    let mult = actual.indexOf("x");
    let divi = actual.indexOf("/");
	if (suma !== -1) {
		arr = actual.split("+",2);
		res = parseInt(arr[0]) + parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;
	} else if (resta !== -1) {
		arr = actual.split("-",2);
		res = arr[0] - arr[1];
		document.getElementById("resultado").innerHTML = res;
		
	} else if (mult !== -1) {
		arr = actual.split("x",2);
		res = arr[0] * arr[1];
		document.getElementById("resultado").innerHTML = res;	
    
    } else if (div !== -1) {
    arr = actual.split("/",2);
    res = arr[0] / arr[1];
    document.getElementById("resultado").innerHTML = res;
    }
}



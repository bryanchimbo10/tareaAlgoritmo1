//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir array5elements Como entero
//PROCESO:
//  Si array5elements[0] % 2 = 0 Entonces
//		Escribir "El primer elemento es par"
//	Sino
//		Escribir "El primer elemento no es par"
//	FinSi
//	Si array5elements[4] % 2 = 0 Entonces
//		Escribir "El último elemento es par"
//	Sino
//		Escribir "El último elemento no es par"
//	FinSi 
//SALIDA:
//		Escribir "El primer elemento es par"
//		Escribir "El primer elemento no es par"
//		Escribir "El último elemento es par"
//		Escribir "El último elemento no es par"

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_35
//	Definir array5elements Como entero
//	Dimension array5elements[5]
//	Para i<-0 Hasta 4 Hacer
//		Escribir "Ingrese un elemento: "
//		Leer array5elementos
//	FinPara
///	Si array5elements[0] % 2 = 0 Entonces
//		Escribir "El primer elemento es par"
//	Sino
//		Escribir "El primer elemento no es par"
//	FinSi
//	Si array5elements[4] % 2 = 0 Entonces
//		Escribir "El último elemento es par"
//	Sino
//		Escribir "El último elemento no es par"
//	FinSi

//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function VEINTE (){
    let array5elements = [];

// Pedir al usuario que ingrese los elementos del arreglo
for (let i = 0; i < 5; i++) {
    array5elements[i] = parseInt(read("Ingrese un elemento:"));
}

// Verificar si el primer elemento es par
if (array5elements[0] % 2 === 0) {
    write("El primer elemento es par");
} else {
    write("El primer elemento no es par");
}

// Verificar si el último elemento es par
if (array5elements[4] % 2 === 0) {
    write("El último elemento es par");
} else {
    write("El último elemento no es par");
}


}
VEINTE()
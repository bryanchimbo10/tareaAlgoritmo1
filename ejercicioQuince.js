//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir arraynombres2 Como Caracter
//PROCESO: 
//		Para  i<-0 Hasta 4 Hacer
//			Escribir "Ingrese un elemento :"
//			leer arraynombres2[i]
//		FinPara
//SALIDA:
//		Escribir "Los elementos cambiados son: ", arraynombres2[4], " " , arraynombres2[0]
//		Escribir "Los del arreglo son: ", arraynombres2[0], " ", arraynombres2[1], " ", arraynombres2[2], " ", arraynombres2[3], " ", arraynombres2[4]
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_15
//		Definir arraynombres2 Como Caracter
//		Dimension arraynombres2[5]
//		Para  i<-0 Hasta 4 Hacer
//			Escribir "Ingrese un elemento :"
//			leer arraynombres2[i]
//		FinPara
//		Escribir "Los elementos cambiados son: ", arraynombres2[4], " " , arraynombres2[0]
//		Escribir "Los del arreglo son: ", arraynombres2[0], " ", arraynombres2[1], " ", arraynombres2[2], " ", arraynombres2[3], " ", arraynombres2[4]
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function Quince (){
    let arrayNombres2 = []; // Declarar un arreglo vacío

// Pedir al usuario que ingrese los elementos del arreglo
for (let i = 0; i < 5; i++) {
    arrayNombres2[i] = read("Ingrese un elemento:");
}

// Intercambiar los elementos primero y último
let temp = arrayNombres2[0];
arrayNombres2[0] = arrayNombres2[4];
arrayNombres2[4] = temp;

// Mostrar los elementos cambiados y el arreglo completo
write("Los elementos cambiados son:", arrayNombres2[4], arrayNombres2[0]);
write("Los elementos del arreglo son:", arrayNombres2.join(" "));


}
Quince()

//ANALISIS DEL PROBLEMA
//ENTRADA:
//	Escribir "El arreglo es: ", arrayelementos[0], " ", arrayelementos[1], " ", arrayelementos[2], " ", arrayelementos[3], " ", arrayelementos[4]
//PROCESO: 
//	Para i<-0 Hasta 4 Hacer
//	Escribir "Ingrese un elemento: "
//	Leer arrayelementos[i]
//	FinPara
//SALIDA:
//	Escribir "El arreglo es: ", arrayelementos[0], " ", arrayelementos[1], " ", arrayelementos[2], " ", arrayelementos[3], " ", arrayelementos[4]
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_12
	//12.	Pedir 5 números y asignarlos en un arreglo
//	Definir arrayelementos Como Caracter
//	Dimension arrayelementos[5]
//	Para i<-0 Hasta 4 Hacer
///		Escribir "Ingrese un elemento: "
//		Leer arrayelementos[i]
//	FinPara
//	Escribir "El arreglo es: ", arrayelementos[0], " ", arrayelementos[1], " ", arrayelementos[2], " ", arrayelementos[3], " ", arrayelementos[4]
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const read = require('prompt-sync')();
const write = console.log
function Doce (){
    let arrayElementos = []; // Declarar un arreglo vacío

// Pedir al usuario que ingrese los elementos del arreglo
 for (let i = 0; i < 5; i++) {
    arrayElementos[i] = read("Ingrese los nombre para el arreglo: ");
 }

 // Mostrar el arreglo completo
 write("El arreglo es:", arrayElementos.join(" "));


}
Doce()
//ANALISIS DEL PROBLEMA
//ENTRADA:
//let arrayElementos = [];
//PROCESO: 
//Para i<-0 Hasta 4 Hacer
//			Escribir "Ingrese un elemento: "
//			Leer arrayelementos[i]
//		FinPara
//SALIDA:
//write("El arreglo es:", arrayElementos.join(" "));

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo sin_titulo
	//13.	Dado un arreglo de 5 nombres presentarlos todos
//		Definir arrayelementos Como Caracter
//		Dimension arrayelementos[5]
//		Para i<-0 Hasta 4 Hacer
//			Escribir "Ingrese un elemento: "
//			Leer arrayelementos[i]
//		FinPara
//		Escribir "El arreglo con los nombres es: ", arrayelementos[0],"," , arrayelementos[1],"," , arrayelementos[2],"," , arrayelementos[3],"," , arrayelementos[4]
//FinAlgoritmo

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const read = require('prompt-sync')();
const write = console.log
function Trece (){
    let arrayElementos = []; // Declarar un arreglo vacío

// Pedir al usuario que ingrese los elementos del arreglo
 for (let i = 0; i < 5; i++) {
    arrayElementos[i] = read("Ingrese los nombre para el arreglo: ");
 }

 // Mostrar el arreglo completo
 write("El arreglo es:", arrayElementos.join(" "));


}
Trece()


//ANALISIS DEL PROBLEMA
//ENTRADA:
//PROCESO: 
//SALIDA:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_34
//	Definir array5, primerElemento, ultimoElemento, i Como Entero
//	Dimension array5[5]
	
//	Para i<-0 hasta 4 Hacer
//		Escribir "Ingrese un valor"
//		leer array5[i]
//	FinPara
	
	
//	primerElemento <- array5[0]
//	ultimoElemento <- array5[4]
	
	
//	Si primerElemento > ultimoElemento Entonces
//		Escribir "El primer elemento es mayor que el último."
//	Sino
//		Escribir "El primer elemento no es mayor que el último."
//	FinSi
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function DIECINUEVE (){
    let array5 = []; // Declarar un arreglo vacío
 let primerElemento, ultimoElemento;

 // Pedir al usuario que ingrese los valores del arreglo
 for (let i = 0; i < 5; i++) {
    array5[i] = read("Ingrese un valor:");
 }

 // Asignar el primer y último elemento del arreglo a variables separadas
 primerElemento = array5[0];
 ultimoElemento = array5[4];

 // Comparar el primer y último elemento
 if (primerElemento > ultimoElemento) {
    write("El primer elemento es mayor que el último.");
 } else {
    write("El primer elemento no es mayor que el último.");
 }


}
DIECINUEVE()

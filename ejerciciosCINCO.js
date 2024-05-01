//5.	Pedir al usuario dos números y mostrar si son iguales o diferentes.__20
//ANALISIS DEL PROBLEMA
//ENTRADA:
//	Definir num1,num2 Como Entero
//	Escribir "Ingrese 2 numeros:"
//PROCESO: 
//	si num1==num2 Entonces
//		Escribir "Los numeros son iguales "
//	SiNo
//		Escribir "Los numeros son distintos"
//	FinSi
//Escribir "Los numeros son iguales "
//		Escribir "Los numeros son distintos"
//SALIDA:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_20
//Pedir al usuario dos números y mostrar si son iguales o diferentes.
//	Definir num1,num2 Como Entero
//	Escribir "Ingrese 2 numeros:"
//	leer num1
//	Leer num2
//	si num1==num2 Entonces
//		Escribir "Los numeros son iguales "
//	SiNo
//		Escribir "Los numeros son distintos"
//	FinSi
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const read = require('prompt-sync')();
const write = console.log
function CINCO (){
    let num1=0,num2=0
    num1= read ("ingrese la primera cantidad: ")
    num1=parseInt(num1)
    num2= read ("ingrese la segunda cantidad: ")
    num2=parseInt(num2)

    if (num1==num2){
		write ("Los numeros son iguales ")
    }
    else{
		write ("Los numeros son distintos ")
	}

}
CINCO()
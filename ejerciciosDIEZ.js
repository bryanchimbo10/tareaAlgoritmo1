//10.	Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.       25
//ANALISIS DEL PROBLEMA
//ENTRADA:
//	Definir num1 Como Entero
//	Escribir 'Ingrese el número que desea evaluar: '
//	Leer num1
//PROCESO: 
//	Si num1>100 Entonces
//		Escribir 'El numero ',num1,' es mayor que 100 '
//	SiNo
//		Si num1<100 Entonces
//			Escribir "El numero ',num1,' es menor que 100"
//		SiNo
//			Escribir "El numero ',num1,' es igual que 100"
//		FinSi
//	FinSi
//SALIDA:
//Escribir 'El numero ',num1,' es mayor que 100 '
//Escribir "El numero ',num1,' es menor que 100"
//Escribir "El numero ',num1,' es igual que 100"
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_25
//Pedir al usuario un número y mostrar si es mayor, menor o igual a 100
//	Definir num1 Como Entero
//	Escribir 'Ingrese el número que desea evaluar: '
//	Leer num1
//	Si num1>100 Entonces
//		Escribir 'El numero ',num1,' es mayor que 100 '
//	SiNo
//		Si num1<100 Entonces
//			Escribir "El numero ',num1,' es menor que 100"
//		SiNo
//			Escribir "El numero ',num1,' es igual que 100"
//		FinSi
//	FinSi
// FinAlgoritmo

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function DIEZ (){
    let num1=0
    num1= read ("ingrese la primera cantidad: ")
    num1=parseInt(num1)
    

    if (num1>100){
		write (`El numero ${num1} es mayor que 100` )
    }
    else if(num1<100){
		write (`El numero ${num1} es memor que 100`)
	}
    else{
        write (`El numero ${num1} es igual que 100`)
    }

}
DIEZ()
//9.	Solicitar al usuario un número y mostrar si es divisible por 2.
//ANALISIS DEL PROBLEMA
//ENTRADA:
//	Definir n Como Entero
//	Escribir "Escribe un numero "
//	Leer n
//PROCESO: 
//	Si n mod 2 ==0 Entonces
//		Escribir "El Numero ",n," es disivible para Dos"
//	SiNo
//		Escribir "El Numero ",n," no es divisible para Dos"
//	FinSi
//SALIDA:
//		Escribir "El Numero ",n," es disivible para Dos"
//		Escribir "El Numero ",n," no es divisible para Dos"
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo  ejercicio_24
	//Solicitar al usuario un número y mostrar si es divisible por 2
//	Definir n Como Entero
//	Escribir "Escribe un numero "
//	Leer n
//	Si n mod 2 ==0 Entonces
//		Escribir "El Numero ",n," es disivible para Dos"
//	SiNo
//		Escribir "El Numero ",n," no es divisible para Dos"
//	FinSi
//FinAlgoritmo

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function NUEVE (){
    let n=0
    n= read ("ingrese la primera cantidad: ")
    n=parseInt(n)
   

    if (n % 2 == 0){
		write (`El Numero ${n} es disivible para Dos`)
    }
    else{
		write (`El Numero ${n} no es divisible para Dos`)
	}

}
NUEVE()
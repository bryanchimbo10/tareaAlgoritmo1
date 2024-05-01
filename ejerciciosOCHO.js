//8.	Pedir al usuario un número y mostrar si es múltiplo de 3.___23
//ANALISIS DEL PROBLEMA
//ENTRADA:
//  Definir n Como Entero
//	Escribir "Escribe un numero "
//	Leer n
//PROCESO: 
//	Si n mod 3 ==0 Entonces
//		Escribir "El Numero ",n," es multiplo de tres"
//	SiNo
//		Escribir "El Numero ",n," no es multiplo de tres"
//	FinSi
//SALIDA:
//Escribir "El Numero ",n," es multiplo de tres"
//Escribir "El Numero ",n," no es multiplo de tres"
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_23
//Pedir al usuario un número y mostrar si es múltiplo de 3
//	Definir n Como Entero
//	Escribir "Escribe un numero "
//	Leer n
//	Si n mod 3 ==0 Entonces
//		Escribir "El Numero ",n," es multiplo de tres"
//	SiNo
//		Escribir "El Numero ",n," no es multiplo de tres"
//	FinSi
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function OCHO (){
    let n=0
    n= read ("ingrese la primera cantidad: ")
    n=parseInt(n)
   

    if (n % 3 == 0){
		write (`El Numero ${n} es multiplo de tres`)
    }
    else{
		write (`El Numero ${n} no es multiplo de tres`)
	}

}
OCHO()
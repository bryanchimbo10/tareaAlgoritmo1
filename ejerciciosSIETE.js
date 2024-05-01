//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir nombre1,nombre2 Como Caracter
//PROCESO:
//    Si nombre1 == nombre2 Entonces
//        Escribir "Los nombres son iguales."
//    Sino Si nombre1 > nombre2 Entonces
//		  Escribir "El primer nombre es mayor que el segundo."
//		Sino
//			Escribir "El primer nombre es menor que el segundo."
//		Fin Si
//	FinSi 
//SALIDA:
//        Escribir "Los nombres son iguales."
//		  Escribir "El primer nombre es mayor que el segundo."
//			Escribir "El primer nombre es menor que el segundo."

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_22
//Definir nombre1,nombre2 Como Caracter
// Solicitar al usuario que ingrese dos nombres

//    Escribir "Ingrese el primer nombre:"
//    Leer nombre1
	
//    Escribir "Ingrese el segundo nombre:"
//    Leer nombre2
	
    // Comparar los nombres
//    Si nombre1 == nombre2 Entonces
//        Escribir "Los nombres son iguales."
//    Sino Si nombre1 > nombre2 Entonces
//		  Escribir "El primer nombre es mayor que el segundo."
//		Sino
//			Escribir "El primer nombre es menor que el segundo."
//		Fin Si
//	FinSi
	
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function SIETE (){
    let nomb1="",nomb2=""
    nomb1= read ("Ingrese el primer nombre: ")
    
    nomb2= read ("Ingrese el segundo nombre: ")
    

    if (nomb1==nomb2){
		write ("Los nombres son iguales. ")
    }
    else if(nomb1>nomb2){
		write ("El primer nombre es mayor que el segundo. ")
	}
    else{
        write ("El primer nombre es menor que el segundo. ")
    }

}
SIETE()
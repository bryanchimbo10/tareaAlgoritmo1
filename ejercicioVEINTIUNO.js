//ANALISIS DEL PROBLEMA
//ENTRADA:
//	Definir array3elements Como Entero
//PROCESO: 
//	para i <-0 Hasta 2 Hacer
//		Escribir "Escribe un numero :"
//		leer array3elements[i]
//	FinPara
	
//	Si array3elements[0] > array3elements[1] Y array3elements[0] > array3elements[2] Entonces
//		Escribir "El primer elemento es mayor"
//	Sino
//		Si array3elements[1] > array3elements[0] Y array3elements[1] > array3elements[2] Entonces
//			Escribir "El segundo elemento es mayor"
//		Sino
//			Escribir "El tercer elemento es mayor"
//		FinSi
//	FinSi

//SALIDA:
//	Si array3elements[0] > array3elements[1] Y array3elements[0] > array3elements[2] Entonces
//		Escribir "El primer elemento es mayor"
//	Sino
//		Si array3elements[1] > array3elements[0] Y array3elements[1] > array3elements[2] Entonces
//			Escribir "El segundo elemento es mayor"
//		Sino
//			Escribir "El tercer elemento es mayor"
//		FinSi
//	FinSi
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo sin_titulo
//	Definir array3elements Como Entero
//	Dimension array3elements[3]
//	para i <-0 Hasta 2 Hacer
//		Escribir "Escribe un numero :"
//		leer array3elements[i]
//	FinPara
	
//	Si array3elements[0] > array3elements[1] Y array3elements[0] > array3elements[2] Entonces
//		Escribir "El primer elemento es mayor"
//	Sino
//		Si array3elements[1] > array3elements[0] Y array3elements[1] > array3elements[2] Entonces
//			Escribir "El segundo elemento es mayor"
//		Sino
//			Escribir "El tercer elemento es mayor"
//		FinSi
//	FinSi

//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function VEINTIUNO (){
    let array3elements = new Array(3);

    for (let i = 0; i < 3; i++) {
        array3elements[i] = parseInt(read("Escribe un número: "));
    }
    
    if (array3elements[0] > array3elements[1] && array3elements[0] > array3elements[2]) {
        write("El primer elemento es mayor");
    } else {
        if (array3elements[1] > array3elements[0] && array3elements[1] > array3elements[2]) {
            write("El segundo elemento es mayor");
        } else {
            write("El tercer elemento es mayor");
        }
    }
    

}
VEINTIUNO()

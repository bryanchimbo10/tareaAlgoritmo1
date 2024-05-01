//1.	Pedir al usuario un número y mostrar si es mayor o menor que 10._
//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir num1 Como Entero
//Escribir "Ingrese el numero que desea evaluar: "
//Leer num1
//PROCESO: 
//Si num1>=10 Entonces
//	Escribir "El numero ", num1 " es mayor que 10"
//SiNo
//	Escribir "El numero ", num1 " es menor que 10"
//Fin Si
//SALIDA:
//	Escribir "El numero ", num1 " es mayor que 10"
//	Escribir "El numero ", num1 " es menor que 10"
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_16 
//Pedir al usuario un número y mostrar si es mayor o menor que 10.
//Definir num1 Como Entero
//Escribir "Ingrese el numero que desea evaluar: "
//Leer num1
//Si num1>=10 Entonces
//	Escribir "El numero ", num1 " es mayor que 10"
//SiNo
//	Escribir "El numero ", num1 " es menor que 10"
//Fin Si
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read= require (`prompt-sync`)();
const write= console.log
function UNO(){
    let num1
    num1= read("Ingrese el numero que desea evaluar: ")
    if (num1>=10){
        write(`El numero  ${num1}  es mayor que el numero 10`)
    }
    else{
        write(`El numero  ${num1}  es menor que el numero 10`)
    }
}
UNO()

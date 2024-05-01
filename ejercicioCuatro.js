//4.	Pedir al usuario un número y mostrar su doble.
//ANALISIS DEL PROBLEMA
//ENTRADA:num1=0,resultado=0
//PROCESO: resultado<- num1+num1
//SALIDA:resultado

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_4	
//Definir num1,resultado Como entero
//Escribir "Ingrese un numero para calcular su doble:"
//leer num1
//resultado<- num1+num1
//Escribir "El doble de tu cantidad ingresada es de: ", resultado 
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log

function cuatro (){
    let num1=0, resultado=0
    num1= read ("ingrese la cantidad para calcular su doble: ")
    num1 = parseInt(num1)

    resultado= num1+num1
     
    write (`El doble de tu cantidad ingresada es de: `,resultado )
}

cuatro()
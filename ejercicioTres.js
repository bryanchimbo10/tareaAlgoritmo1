//3.	Solicitar al usuario dos números y mostrar su suma.
//ANALISIS DEL PROBLEMA
//ENTRADA:num1=0,num2=0,suma=0
//PROCESO: 
//Escribir "Escriba la primera cantidad para calcular"
//Leer num1
//Escribir "Escriba la segunda cantidad para calcular"
//Leer num2
//suma<- num1+num2
//SALIDA:suma
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO 
//Algoritmo ejercicio_3
//Definir  num1,num2,suma Como Entero 
//Escribir "Escriba la primera cantidad para calcular"
//Leer num1
//Escribir "Escriba la segunda cantidad para calcular"
//Leer num2
//suma<- num1+num2
//Escribir "El resutado de la suma de " , num1 , " y " ,num2, " es: ", suma
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log

function tres(){
    let num1=0, num2=0, suma=0
    num1 = read ("Ingrese la primera cantidad: ")
    num1 = parseInt(num1)
    num2 = read ("Ingrese la primera cantidad: ")
    num2 = parseInt(num2)
    suma =num1 + num2
    write (`El resutado de la suma de  ${num1} + ${num2} es: ${suma} `)

}
tres ()
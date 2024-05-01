//6.	Pedir al usuario dos números y mostrar el resultado de multiplicarlos.
//ANALISIS DEL PROBLEMA
//ENTRADA:num1=0,resultado=0
//PROCESO: resultado<- num1*num2
//SALIDA:resultado
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_6
//Definir num1,num2,multi Como Entero
//Escribir "Escriba la primera cantidad para calcular"
//Leer num1
//Escribir "Escriba la segunda cantidad para calcular"
//Leer num2	
//multi<- num1*num2
//Escribir "El resutado de la multiplicacion de " , num1 , " y " , num2 , " es: ", multi
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log

function Seis(){
    let num1=0,num2=0,multi
    num1=read("Ingrese la primera camtidad: ")
    num1=parseInt(num1)
    num2=read("Ingrese la primera camtidad: ")
    num2=parseInt(num2)

    multi=num1*num2

    write (`El resutado de la multiplicacion de   ${num1}   y   ${num2}   es:  ${multi}`)

}
Seis()
//5.	Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
//ANALISIS DEL PROBLEMA
//ENTRADA:edad=0, edad2=0
//PROCESO: edad2<- edad+1
//SALIDA:edad2
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_5
//Definir edad, edad2 Como Entero
//Escribir "Ingrese su edad aqui:"
//leer edad
//edad2<- edad+1
//Escribir "Su edad para el siguiente año sera: " , edad2
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function Cinco(){
    let edad=0, edad2=0
    edad=read("Ingrese su edad aqui: ")
    edad=parseInt(edad)

    edad2= edad+1

    write (`Su edad para el siguiente año sera: `,edad2)

}
Cinco()
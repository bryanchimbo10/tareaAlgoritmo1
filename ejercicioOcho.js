//8.	Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
//ANALISIS DEL PROBLEMA
//ENTRADA:
//nombre=""
//PROCESO: 
//Escribir "Su nombre es:"
//SALIDA:
//Escribir "Su nombre es:"
//Escribir "" ,nombre
//Escribir "" ,nombre
//Escribir "" ,nombre
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_8
//Definir nombre Como Caracter
//Escribir "Escriba su nombres y apellidos: "
//Leer nombre
//Escribir "Su nombre es:"
//Escribir "" ,nombre
//Escribir "" ,nombre
//Escribir "" ,nombre
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)();
const write = console.log

function Ocho(){
    let nombre=""
    nombre =read ("Escriba su nombres y apellidos: ")
    write (`Su nombre es: `)
    write (`${nombre}`)
    write (`${nombre}`)
    write (`${nombre}`)
}
Ocho()
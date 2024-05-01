//9.	Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
//ANALISIS DEL PROBLEMA
//ENTRADA:
//Escribir "ingrese el numero de la tabla de multiplicarque desea conocer: "
//Leer num_tabla
//PROCESO: 
//Escribir "1 x ", num_tabla," = " 1*num_tabla
//Escribir "2 x ", num_tabla," = " 2*num_tabla
//Escribir "3 x ", num_tabla," = " 3*num_tabla
//Escribir "4 x ", num_tabla," = " 4*num_tabla
//Escribir "5 x ", num_tabla," = " 5*num_tabla
//Escribir "6 x ", num_tabla," = " 6*num_tabla
//Escribir "7 x ", num_tabla," = " 7*num_tabla
//Escribir "8 x ", num_tabla," = " 8*num_tabla
//Escribir "9 x ", num_tabla," = " 9*num_tabla
//Escribir "10x ",num_tabla," = " 10*num_tabla
//SALIDA:
//Escribir "1 x ", num_tabla," = " 1*num_tabla
//Escribir "2 x ", num_tabla," = " 2*num_tabla
//Escribir "3 x ", num_tabla," = " 3*num_tabla
//Escribir "4 x ", num_tabla," = " 4*num_tabla
//Escribir "5 x ", num_tabla," = " 5*num_tabla
//Escribir "6 x ", num_tabla," = " 6*num_tabla
//Escribir "7 x ", num_tabla," = " 7*num_tabla
//Escribir "8 x ", num_tabla," = " 8*num_tabla
//Escribir "9 x ", num_tabla," = " 9*num_tabla
//Escribir "10x ",num_tabla," = " 10*num_tabla
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_9
//Definir num_tabla Como Entero
//Escribir "ingrese el numero de la tabla de multiplicarque desea conocer: "
//Leer num_tabla
//Escribir "1 x ", num_tabla," = " 1*num_tabla
//Escribir "2 x ", num_tabla," = " 2*num_tabla
//Escribir "3 x ", num_tabla," = " 3*num_tabla
//Escribir "4 x ", num_tabla," = " 4*num_tabla
//Escribir "5 x ", num_tabla," = " 5*num_tabla
//Escribir "6 x ", num_tabla," = " 6*num_tabla
//Escribir "7 x ", num_tabla," = " 7*num_tabla
//Escribir "8 x ", num_tabla," = " 8*num_tabla
//Escribir "9 x ", num_tabla," = " 9*num_tabla
//Escribir "10x ",num_tabla," = " 10*num_tabla
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)();
const write = console.log 
function Nueve(){
let num_tabla
num_tabla = read ("ingrese el numero de la tabla de multiplicarque desea conocer: ")

write(` 1 x ${num_tabla} = ${ 1*num_tabla}` )
write(` 2 x ${num_tabla} = ${ 2*num_tabla}` )
write(` 3 x ${num_tabla} = ${ 3*num_tabla}` )
write(` 4 x ${num_tabla} = ${ 4*num_tabla}` )
write(` 5 x ${num_tabla} = ${ 5*num_tabla}` )
write(` 6 x ${num_tabla} = ${ 6*num_tabla}` )
write(` 7 x ${num_tabla} = ${ 7*num_tabla}` )
write(` 8 x ${num_tabla} = ${ 8*num_tabla}` )
write(` 9 x ${num_tabla} = ${ 9*num_tabla}` )
write(`10 x ${num_tabla} = ${10*num_tabla}` )
}
Nueve()
 
//1.	Pedir al usuario su nombre y saludarlo
//ANALISIS DEL PROBLEMA 
//ENTRADA:nombre=""
//PROCESO:Pedir el ingreso del nombre al usuario 
//SALIDA: saludo + nombre""
//PSEUDOCODIGO
//Algoritmo ejercicio_1
//	Definir nombre Como Caracter
//	Escribir "ingrese su nombre"
//	Leer nombre
//	Escribir "Saludos " +nombre+ " bienvenido a nuestro programa que lo disfrfutes..."
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function ejericiciouno(){
    let nombre=""
    nombre = read ("Ingrese su nombre: ")

    write (`Saludos  ${nombre}  bienvenido a nuestro programa que lo disfutes`)
    
   

}

ejericiciouno()
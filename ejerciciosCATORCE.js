//14.	Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, 
//considerando que la nota mínima de aprobación es 60 puntos.
//ANALISIS DEL PROBLEMA
//ENTRADA:
//PROCESO: 
//	si nota >=60 Entonces
//		Escribir "Aprobado"
//	SiNo
//		Escribir "Reprobado"
//	FinSi
//SALIDA:
//		Escribir "Aprobado"
//		Escribir "Reprobado"
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_29
	//14.	Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, //
	//considerando que la nota mínima de aprobación es 60 puntos.//
//	Definir nota Como Real
//	Escribir "Ingrese su nota"
//	Leer nota
//	si nota >=60 Entonces
//		Escribir "Aprobado"
//	SiNo
//		Escribir "Reprobado"
//	FinSi
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function CATORCE (){
    let nota=0
    nota  = read ("ingrese su nota: ")
    nota=parseInt(nota)
  

    if (nota >=60){
		write ("Aprobado ")
    }
    else{
		write ("Reprobado")
	}

}
CATORCE()

//ANALISIS DEL PROBLEMA
//ENTRADA:
//arrayelementos
//PROCESO: 
//Para i<-0 Hasta 4 Hacer
//		Escribir "Ingrese un elemento: "
//		Leer arrayelementos[i]
//	FinPara
//SALIDA:
//	Escribir "El elemento: ", arrayelementos[0], " es el primero"
//	Escribir "El elemento: ", arrayelementos[2], " es el del medio"
//	Escribir "El elemento: ", arrayelementos[4], " es el último"

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo sin_titulo

	// Pedir 5 elementos y asignarlos a un arreglo
//	Definir arrayelementos Como Caracter
//	Dimension arrayelementos[5]
	
//	Para i<-0 Hasta 4 Hacer
//		Escribir "Ingrese un elemento: "
//		Leer arrayelementos[i]
//	FinPara
	
//	Escribir "El arreglo es: ", arrayelementos[0], " ", arrayelementos[1], " ", arrayelementos[2], " ", arrayelementos[3], " ", arrayelementos[4]
	
	// Dado un arreglo de 5 elementos, presentar el primero, el del medio y el último
//	Escribir "El elemento: ", arrayelementos[0], " es el primero"
//	Escribir "El elemento: ", arrayelementos[2], " es el del medio"
//	Escribir "El elemento: ", arrayelementos[4], " es el último"

//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function Catorce (){
    let arrayElementos = []; // Declarar un arreglo vacío

    // Pedir al usuario que ingrese los elementos del arreglo
    for (let i = 0; i < 5; i++) {
        arrayElementos[i] = read("Ingrese un elemento:");
    }
    
    // Mostrar el arreglo completo
    write("El arreglo es:", arrayElementos.join(" "));
    
    // Presentar el primero, el del medio y el último elemento
    write("El elemento:", arrayElementos[0], "es el primero");
    write("El elemento:", arrayElementos[2], "es el del medio");
    write("El elemento:", arrayElementos[4], "es el último");
    
    
}
Catorce()

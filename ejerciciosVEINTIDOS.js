//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir x Como entero
//PROCESO: 
//	Para x<-1 Hasta 4 Hacer
//		Escribir "Ingrese el numero ",x
//		Leer arrayelementos(x)
//	FinPara
//SALIDA:
//Escribir "La suma de todos los elementos es: ", suma
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_37
//	Definir x Como entero
//	definir suma, arrayelementos Como Real
//	Dimension arrayelementos[5]
//	Para x<-1 Hasta 4 Hacer
//		Escribir "Ingrese el numero ",x
//		Leer arrayelementos(x)
//	FinPara
//	suma=0
//	para x=1 Hasta 4 Con Paso 1 Hacer
//		suma = suma + arrayelementos(x)
//	FinPara
//	Escribir "La suma de todos los elementos es: ", suma
//FinAlgoritmo

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const read = require('prompt-sync')();
const write = console.log
function VEINTIDOS (){
    let suma = 0;
    let arrayElementos = [];
    
    // Pedir al usuario que ingrese los números
    for (let x = 1; x <= 5; x++) {
        arrayElementos[x] = parseFloat(read(`Ingrese el número ${+ x}:`));
    }
    
    // Calcular la suma de los elementos
    for (let x = 1; x <= 5; x++) {
        suma = suma + arrayElementos[x];
    }
    
    // Mostrar la suma de los elementos
    write("La suma de todos los elementos es:", suma);
}
VEINTIDOS()

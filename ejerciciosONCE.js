//11.	Solicitar al usuario un número y mostrar si es un número de un solo dígito.___26
//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir num como entero
//    Escribir "Ingrese un número:"
//    Leer num
//PROCESO:
//    Si num >= 0 y num <= 9 Entonces
//        Escribir "El número ingresado es un solo dígito."
//    Sino
//        Escribir "El número ingresado no es un solo dígito."
//    Fin Si 
//SALIDA:
//Escribir "El número ingresado es un solo dígito."
//        Escribir "El número ingresado no es un solo dígito."

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_26
//Definir num como entero
// Solicitar al usuario que ingrese un número
//    Escribir "Ingrese un número:"
//    Leer num
	
    // Verificar si el número tiene un solo dígito
//    Si num >= 0 y num <= 9 Entonces
//        Escribir "El número ingresado es un solo dígito."
//    Sino
//        Escribir "El número ingresado no es un solo dígito."
//    Fin Si
//FinAlgoritmo

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read =require (`prompt-sync`)();
const write = console.log
function ONCE(){
    let num=0
    num= read ("ingrese la primera cantidad: ")
    num=parseInt(num)
  

    if (num >= 0 && num <= 9){
		write ("El número ingresado es de un solo dígito.")
    }
    else{
		write ("El número ingresado no es de un solo dígito.")
	}
}
ONCE()
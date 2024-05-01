//10.	Pedir al usuario dos números y mostrar el mayor.
//Algoritmo ejercicio_10
//ANALISIS DEL PROBLEMA
//ENTRADA:
//num1=0,num2=0
//PROCESO:
//si num1==num2 Entonces
//Escribir "Los numeros son iguales"
//SiNo
//si num1>num2 Entonces
//Escribir  "El numero " , num1, " es mayor"
//SiNo
//Escribir  "El numero " , num2, " es mayor"
//FinSi
//FinSi 
//SALIDA:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Pedir al usuario dos números y mostrar el mayor//.	
//Definir num1,num2 Como Entero
//Escribir "Inrese la primera cantidad:"
//leer num1
//Escribir "Inrese la primera cantidad:"
//leer num2
//si num1==num2 Entonces
//Escribir "Los numeros son iguales"
//SiNo
//si num1>num2 Entonces
//Escribir  "El numero " , num1, " es mayor"
//SiNo
//Escribir  "El numero " , num2, " es mayor"
//FinSi
//FinSi
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

const read = require (`prompt-sync`)();
const write = console.log
function Diez(){
    let num1=0, num2=0

    num1= read("Inrese la primera cantidad:")
    num1= parseInt(num1)
    num2= read("Inrese la primera cantidad:")
    num2= parseInt(num2)

    if (num1==num2){
        write ("Los numeros son iguales")
    }
    else if (num1>num2){
        write(`El numero  ${num1}  es mayor`)

    }
    else {
        write(`El numero  ${num2}  es mayor`)
    }

} 
Diez()

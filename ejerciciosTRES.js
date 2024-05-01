//3.Pedir al usuario un número y mostrar si es par o impar.__18
//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir n Como Entero
//PROCESO: 
//si n mod 2==0 Entonces
//Escribir "El numero ",n, " es par"
//SiNo
//Escribir "El numero ",n, " es impar"
//FinSi
//SALIDA:
//Escribir "El numero ",n, " es par"
//Escribir "El numero ",n, " es impar"
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_18
//Pedir al usuario un número y mostrar si es par o impar.
//Definir n Como Entero
//Escribir "Ingrese un numero:"
//leer n
//si n mod 2==0 Entonces
//Escribir "El numero ",n, " es par"
//SiNo
//Escribir "El numero ",n, " es impar"
//FinSi
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require(`prompt-sync`)();
const write= console.log
function TRES(){
    let n=0
    n=read ("Ingrese un numero: ")
    n= parseInt(n)
    if (n % 2==0){
        write(`El numero ${n}  es par`)
    }
    else{
        write(`El numero ${n}  es impar`)
    }


}
TRES()

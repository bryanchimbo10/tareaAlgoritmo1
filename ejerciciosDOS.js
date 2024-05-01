///2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad._17
//ANALISIS DEL PROBLEMA
//ENTRADA:
//definir edad Como entero
//Escribir "Ingrese su edad: "
//Leer edad
//PROCESO: 
//Si edad >= 18 Entonces
//Escribir "Al tener ",edad, " años ya es mayor de edad. "
//SiNo
//Escribir "Al tener ",edad, " años aun no es mayor de edad. "
//FinSi
//SALIDA:
//Escribir "Al tener ",edad, " años ya es mayor de edad. "
//Escribir "Al tener ",edad, " años aun no es mayor de edad. "
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_17
//Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
//definir edad Como entero
//Escribir "Ingrese su edad: "
//Leer edad
//Si edad >= 18 Entonces
//Escribir "Al tener ",edad, " años ya es mayor de edad. "
//SiNo
//Escribir "Al tener ",edad, " años aun no es mayor de edad. "
//FinSi
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)();
const write= console.log
function DOS(){
    let edad=0
    edad=read ("Ingrese su edad: ")
    if (edad>=18){
        write(`Al tener ${edad}  años ya es mayor de edad. `)
    }
    else{
        write(`Al tener ${edad}  años aun no es mayor de edad. `)
    }
}
DOS()




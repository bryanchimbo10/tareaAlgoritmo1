//11.	Solicitar al usuario una distancia en metros y mostrarla en centímetros.
//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir  metros, centimetros Como Real
//Escribir "Ingreso los metros"
//Leer metros 
//PROCESO:
//centimetros<- metros*100 
//SALIDA:
//Escribir "Los metros convertidos a centimetros es: " centimetros 
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_11
//Solicitar al usuario una distancia en metros y mostrarla en centímetros.
//Definir  metros, centimetros Como Real
//Escribir "Ingreso los metros"
//Leer metros 
//centimetros<- metros*100
//Escribir "Los metros convertidos a centimetros es: " centimetros 
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require (`prompt-sync`)();
const write = console.log
function Once (){
    let metros=0, centimetros=0
    metros= read("Ingreso los metros: ")
    metros= parseFloat(metros)
    centimetros= metros*100
    write(`Los metros convertidos a centimetros es:${centimetros}`)

}
Once()
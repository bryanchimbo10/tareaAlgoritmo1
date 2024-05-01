//7.	Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
//ANALISIS DEL PROBLEMA
//ENTRADA:var=1.8, var2=32,celsius,fahren
//PROCESO: fahren<- celsius*var+var2
//SALIDA:Escribir "Su nueva temperatura es ", fahren
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_7
//Definir var, var2,celsius,fahren Como Real
//var<-1.8
//var2<-32
//Escribir "Ingrese los grados celcius: "
//Leer celsius
//fahren<- celsius*var+var2
//Escribir "Su nueva temperatura es ", fahren
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require(`prompt-sync`)();
const write = console.log

function Siete(){
    let var2=32, celsius=0, fahren=0
    let var3=1.8 
    

    celsius = read ("Ingrese los grados celcius: ")
    celsius= parseFloat(celsius)

    fahren= celsius*var3+var2
    var3=parseFloat(var3)
    var2= parseInt(var2)
    write (`Su nueva temperatura es  ${fahren}`)

}
Siete()
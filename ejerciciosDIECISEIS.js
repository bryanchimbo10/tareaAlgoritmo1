//16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. 
//Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual
//ANALISIS DEL PROBLEMA
//ENTRADA:
//PROCESO: 
//SALIDA:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo sin_titulo
//	Definir sueldoMensual, sueldoAnual, excedente, impuesto Como Real
	
//	Escribir "Ingrese su sueldo mensual: "
//	Leer sueldoMensual
	
//	sueldoAnual <- sueldoMensual * 12
	
//	Si sueldoAnual > 30000 Entonces
//		excedente <- sueldoAnual - 30000
//		impuesto <- excedente * 0.15
//		sueldoAnual <- sueldoAnual - impuesto
//		Escribir "Su sueldo neto anual es: $", sueldoAnual
//	Sino
//		Escribir "Su sueldo anual es: $", sueldoAnual
//	FinSi
//
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const read = require('prompt-sync')();
const write = console.log
function DIECISEIS (){
    let sueldoMensual, sueldoAnual, excedente, impuesto;

sueldoMensual = parseFloat(read("Ingrese su sueldo mensual: "));

sueldoAnual = sueldoMensual * 12;

if (sueldoAnual > 30000) {
    excedente = sueldoAnual - 30000;
    impuesto = excedente * 0.15;
    sueldoAnual -= impuesto;
    write("Su sueldo neto anual es: $" + sueldoAnual);
} else {
    write("Su sueldo anual es: $" + sueldoAnual);
}

}
DIECISEIS()

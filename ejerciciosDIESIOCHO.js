//ANALISIS DEL PROBLEMA
//ENTRADA:
//	Definir costoPorPersona, numeroPersonas, costoTotal, costoTotalConIVA Como Real
//PROCESO: 
//    Si numeroPersonas <= 100 Entonces
///        costoTotal <- costoPorPersona * numeroPersonas
//    Sino Si numeroPersonas <= 200 Entonces
//			costoPorPersona <- 15.00
///			costoTotal <- costoPorPersona * numeroPersonas
//		Sino
//			costoPorPersona <- 10.00
//			costoTotal <- costoPorPersona * numeroPersonas
//		FinSi
//	FinSi
//SALIDA:
//		Escribir "El presupuesto total para el evento es: $", costoTotalConIVA
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo sin_titulo
//	Definir costoPorPersona, numeroPersonas, costoTotal, costoTotalConIVA Como Real
    
//    costoPorPersona <- 20.00
    
//    Escribir "Ingrese el número de personas que asistirán al evento: "
//    Leer numeroPersonas
    
//    Si numeroPersonas <= 100 Entonces
///        costoTotal <- costoPorPersona * numeroPersonas
//    Sino Si numeroPersonas <= 200 Entonces
//			costoPorPersona <- 15.00
///			costoTotal <- costoPorPersona * numeroPersonas
//		Sino
//			costoPorPersona <- 10.00
//			costoTotal <- costoPorPersona * numeroPersonas
//		FinSi
//	FinSi
	
//		costoTotalConIVA <- costoTotal + (costoTotal * 0.15)
		
//		Escribir "El presupuesto total para el evento es: $", costoTotalConIVA

//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function DIESIOCHO (){
    let costoPorPersona, numeroPersonas, costoTotal, costoTotalConIVA;

    costoPorPersona = 20.00;
    
    numeroPersonas = parseFloat(read("Ingrese el número de personas que asistirán al evento: "));
    
    if (numeroPersonas <= 100) {
        costoTotal = costoPorPersona * numeroPersonas;
    } else if (numeroPersonas <= 200) {
        costoPorPersona = 15.00;
        costoTotal = costoPorPersona * numeroPersonas;
    } else {
        costoPorPersona = 10.00;
        costoTotal = costoPorPersona * numeroPersonas;
    }
    
    costoTotalConIVA = costoTotal + (costoTotal * 0.15);
    
    write("El presupuesto total para el evento es: $" + costoTotalConIVA);
    

}
DIESIOCHO()
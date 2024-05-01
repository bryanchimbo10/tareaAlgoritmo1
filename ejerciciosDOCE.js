//12.	Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular 
//y mostrar el monto total a pagar incluyendo el IVA.
//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir monto_sin_iva, porcentajeiva_aplicado, monto_inc_iva, iva,valor_iva Como Real
//PROCESO: 
//	iva<-porcentajeiva_aplicado/100
//	valor_iva<- monto_sin_iva*iva
//	monto_inc_iva<-monto_sin_iva+valor_iva
//SALIDA:
//	Escribir "El valor del iva aplicado es:$", valor_iva
//	Escribir "El valor de su factura con iva es de:$", monto_inc_iva
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_27
	//Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. 
	//Luego, calcular y mostrar el monto total a pagar incluyendo el IVA	
//	Definir monto_sin_iva, porcentajeiva_aplicado, monto_inc_iva, iva,valor_iva Como Real
//	Escribir "ingrese el valor de la factura: " 
//	Leer monto_sin_iva
//	Escribir "ingrese el porcentaje del iva aplicado: "
//	Leer porcentajeiva_aplicado
//	iva<-porcentajeiva_aplicado/100
//	valor_iva<- monto_sin_iva*iva
//	monto_inc_iva<-monto_sin_iva+valor_iva
//	Escribir "El valor del iva aplicado es:$", valor_iva
//	Escribir "El valor de su factura con iva es de:$", monto_inc_iva
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function DOCE (){
    let monto_sin_iva=0, porcentajeiva_aplicado=0, monto_inc_iva=0, iva=0,valor_iva=0
    monto_sin_iva= read ("ingrese el valor de la factura: ")
    monto_sin_iva=parseFloat(monto_sin_iva)
    porcentajeiva_aplicado= read ("ingrese el porcentaje del iva aplicado: ")
    porcentajeiva_aplicado=parseFloat(porcentajeiva_aplicado)
	iva= porcentajeiva_aplicado/100
	valor_iva= monto_sin_iva*iva
    monto_inc_iva= monto_sin_iva+valor_iva
	write (`El valor del iva aplicado es:$" ${valor_iva}`)
	write (`El valor de su factura con iva es de:$", ${monto_inc_iva}`)


}
DOCE()

//15.	Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. 
//Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final.
//ANALISIS DEL PROBLEMA
//ENTRADA:
//Definir preciovehi,año_fabri,descu,precio_final Como real
//PROCESO: 
//	Si año_fabri>=2010 Entonces
//		Escribir "El Precio de su vehiculo es de: ", preciovehi
//		Escribir""
//		Escribir "Usted no recibe ningun descuento ya que el vehiculo que va a adquierir es sueperior al 2010"
//	SiNo
//		descu<-preciovehi*descu
//		precio_final<- preciovehi - descu
//		Escribir "El Precio de su vehiculo es de: ", preciovehi
//		Escribir""
//		Escribir "El valor de de su descuento es: " ,descu
//		Escribir""
//		Escribir "El precio final de su vehiculo es de: ", precio_final
//	FinSi
//SALIDA:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_30
//Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación es anterior a 2010,
//aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final.
//	Definir preciovehi,año_fabri,descu,precio_final Como real
//	descu<-0.10
//	Escribir "Ingrese el precio de su vehiculo:"
//	Leer preciovehi
//	Escribir "Ingrese el año de fabricacion del vehiculo:"
//	Leer año_fabri
//	Escribir "ADVERTENCIA:Recuerde que si su vehiculo es anterior al año del 2010 aplica un descuento... "
//	Escribir""
//	Escribir""
//	Si año_fabri>=2010 Entonces
//		Escribir "El Precio de su vehiculo es de: ", preciovehi
//		Escribir""
//		Escribir "Usted no recibe ningun descuento ya que el vehiculo que va a adquierir es sueperior al 2010"
//	SiNo
//		descu<-preciovehi*descu
//		precio_final<- preciovehi - descu
//		Escribir "El Precio de su vehiculo es de: ", preciovehi
//		Escribir""
//		Escribir "El valor de de su descuento es: " ,descu
//		Escribir""
//		Escribir "El precio final de su vehiculo es de: ", precio_final
//	FinSi
//FinAlgoritmo
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function QUINCE (){
    let  preciovehi=0,ano_fabri=0,descu=0.10,precio_final=0
    preciovehi= read ("Ingrese el precio de su vehiculo: ")
    preciovehi=parseInt(preciovehi)
    ano_fabri= read ("Ingrese el año de fabricacion del vehiculo: ")
    ano_fabri=parseInt(ano_fabri)
	write ("ADVERTENCIA:Recuerde que si su vehiculo es anterior al año del 2010 aplica un descuento...")

    if (ano_fabri>=2010){
		write (`El Precio de su vehiculo es de:  ${preciovehi}`)
		write ("")
		write ("Usted no recibe ningun descuento ya que el vehiculo que va a adquierir es sueperior al 2010")
    }
    else{
		descu=preciovehi*descu
		precio_final=preciovehi - descu
		write (`El Precio de su vehiculo es de:  ${preciovehi}`)
		write ("")
		write (`El valor de de su descuento es:  ${descu}`)
		write ("")
		write (`El precio final de su vehiculo es de:  ${precio_final}`)
	}

}
QUINCE()


//13.	Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. 
//Calcular y mostrar el precio final luego de aplicar el descuento.____
//ANALISIS DEL PROBLEMA
//ENTRADA:
//PROCESO: 
//	valor_descuento<- porcentaje_desc/100
//	descuento<- precio_producto*valor_descuento
//	precio_final<- precio_producto-descuento
//SALIDA:
//	Escribir "El valor dedescuento aplicado es:$", descuento
//	Escribir "El precio final del producto es:$", precio_final
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//PSEUDOCODIGO
//Algoritmo ejercicio_28
	//Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final 
	//luego de aplicar el descuento.
//	Definir precio_producto, porcentaje_desc,precio_final, descuento,valor_descuento Como Real
//	Escribir "ingrese elprecio del producto: " 
//	Leer precio_producto
//	Escribir "ingrese el porcentaje de descuento: "
//	Leer porcentaje_desc
//	valor_descuento<- porcentaje_desc/100
//	descuento<- precio_producto*valor_descuento
//	precio_final<- precio_producto-descuento
//	Escribir "El valor dedescuento aplicado es:$", descuento
//	Escribir "El precio final del producto es:$", precio_final
//FinAlgoritmo

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const read = require('prompt-sync')();
const write = console.log
function TRECE(){
    let precio_producto=0, porcentaje_desc=0,precio_final=0, descuento=0,valor_descuento=0
    precio_producto= read ("ingrese el valor de la factura: ")
    precio_producto=parseFloat(precio_producto)
    porcentaje_desc= read ("ingrese el porcentaje del iva aplicado: ")
    porcentaje_desc=parseFloat(porcentaje_desc)
	valor_descuento= porcentaje_desc/100
	descuento= precio_producto*valor_descuento
    precio_final= precio_producto-descuento
	write (`El valor dedescuento aplicado es:$ ${descuento}`)
	write (`El precio final del producto es:$, ${precio_final}`)

}
TRECE()

/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo1;
	var descuento;

	sueldo1=importe.value;

	sueldo1=parseInt(sueldo1);
	descuento=parseInt(descuento);

	descuento=(sueldo1*25)/100;

	resultado.value=sueldo1-descuento;
}

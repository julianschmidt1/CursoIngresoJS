function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;

	precio=prompt("Ingrese el precio: ");
	precio=parseInt(precio);
	porcentaje=prompt("Ingrese el porcentaje: ");
	porcentaje=parseInt(porcentaje);

	descuento=precio*porcentaje/100;

	elPrecioFinal.value=precio-descuento;


}






























/*
	var precio;
	var porcentaje;
	var descuento;

	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el porcentaje de descuento");

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	descuento=(precio*descuento)/100;

	elPrecioFinal.value=precio-descuento;
*/


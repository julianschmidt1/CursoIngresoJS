function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;

	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el porcentaje de descuento");

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	descuento=(precio*descuento)/100;

	elPrecioFinal.value=precio-descuento;


}


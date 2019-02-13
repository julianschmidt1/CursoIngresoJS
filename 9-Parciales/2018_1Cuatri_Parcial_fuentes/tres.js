function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;

	precio=prompt("Ingrese el precio: ");
	porcentaje=prompt("Ingrese el porcentaje: ");

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	descuento=(precio*porcentaje)/100;

	elPrecioFinal.value=precio-descuento;

}




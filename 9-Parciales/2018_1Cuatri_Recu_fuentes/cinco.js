function mostrar()
{
	var descuento;
	var tipopago;
	var paquete;

	tipopago=prompt("Elija el tipo de pago 1- tarjeta Visa 2- paypal 3- mercadopago 4- efectivo 5- otro");
	paquete=prompt("Seleccione el paquete: 1-todoincluido 2-solodesayuno");
	paquete=parseInt(paquete);
	tipopago=parseInt(tipopago);


	switch(tipopago)
	{
		case "tarjeta":
		descuento=0.9;
		break;
		case "paypal":
		descuento=0.85;
		switch(paquete)
		{
			case "todoincluido": //todo incluido
			descuento=0.75;
		}
		break;
		case "mercadopago":
		descuento=0.9;
		break;
		case "efectivo":
		descuento=0.8;
		switch(paquete)
		{
			case "solodesayuno": //soloDesayunos
			descuento=0.7;
			break;
			case "todoincluido": //todoIncluido
			descuento=0.65;
		}
		case "otro":
		descuento=0.95;
		break;
	}



}
/*
cada habitacion de un hotel tiene un precio. hay promociones segun el tipo de pago.
si es con tarjeta visa un 10% descuento, si es paypal un 15%, por mercadopago un 10%.
efectivo 20%, cualquier otro medio 5%
si compraste el paquete "todoIncluido" y pagas con paypal se te suma un 10% al descuento.
si pagas en efectivo, tenes varias opciones, el paquete "soloDesayunos" te suma un 10% al descuento.
si el paquete es "todoincluido" le suma un 15% y para el resto los paquetes no tienen descuento adicional.

*/
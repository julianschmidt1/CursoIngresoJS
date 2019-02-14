function mostrar()
{
	var importe;
	var cantidad;
	var metodopago;
	var preciofinal

	importe=prompt("Ingrese el importe: ");
	cantidad=prompt("Ingrese cantidad: ");
	metodopago=prompt("Paga con 1-tarjeta o 2-efectivo");

	importe=parseInt(importe);
	cantidad=parseInt(cantidad);

	if(cantidad>2)
	{
		importe=importe*0.85;
		{
			if(importe>2000)
			{
				importe=importe*0.90;
			}
		}
	}
	if(metodopago=1)
	{
		preciofinal=preciofinal*
	}

}
/*
al realizar una compra, si compra de mas de dos productos se realiza un descuento del 10%  y si supera los $2000 se agrega un descuento
del 15%, si el pago es con tarjeta de credito y no efectivo al precio final se le agrega un 10% de recargo

*/

	/*var precio;
	var precioxcant;
	var cantidad;
	var descuento1;
	var descuento2;
	var preciofinal;
	var aumento;
	var metodopago;

	precio=prompt("Ingrese el precio: ");
	cantidad=prompt("Ingrese la cantidad de productos a comprar: ");

	cantidad=parseInt(cantidad);
	precio=parseInt(precio);
	precioxcant=parseInt(precioxcant);
	preciofinal=parseInt(preciofinal);

	precioxcant=(precio*cantidad);

	metodopago=metodoDePago.value;

	if(cantidad>2)
	{
		descuento1=(precioxcant*10)/100;
		preciofinal=precioxcant-descuento1:
		{
			if(precioxcant>2000)
			{
				descuento2=(precioxcant*15)/100;
				preciofinal=descuento2+descuento1;
			} else
			{}
		}	
	}
	else {
		if(metodopago=="Tarjeta") //<<asumiendo que las opciones son unicamente efectivo y tarjeta
		{
			aumento=(preciofinal*10)/100;
			preciofinal=preciofinal+aumento;
		}
	} */
function mostrar()
{
  	var precio;
  	var recargo;
  	var preciofinal;

  	precio=elPrecio.value;

  	precio=parseInt(precio);
  	recargo=parseInt(recargo);
  	preciofinal=parseInt(preciofinal);
    
  	recargo=(precio*10)/100;
  	preciofinal=precio+recargo;

  	alert("El precio del producto en efectivo es de "+precio+". Con tarjeta tiene un recargo del 10% que seria "+recargo+", costando el final $"+preciofinal);

}


/*alert("el precio del productgo en efectivo es de :$ xxxx. 
con tarjeta tiene n recargo del 10% que seria $xx de recargo,
costando el final $xxxx")*/
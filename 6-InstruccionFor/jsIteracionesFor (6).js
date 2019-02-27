function mostrar()
{
	var numero;
	var pares=0;
	numero=prompt("Ingrese un numero ");
	for(num=2;num<=numero;num+=2)
	{
		alert(num);
		pares=pares+1;
	}
	alert("La cantidad de numeros pares encontrados es: "+pares);

}//FIN DE LA FUNCIÓN

/* funciona bien villa con while
	var numero;
	var asd=2;
	numero=prompt("Ingrese un numero: ");
	numero=parseInt(numero);
	while(asd<=numero)
	{
		alert(""+asd);
		asd=asd+2;
	}

*/
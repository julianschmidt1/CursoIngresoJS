function mostrar()
{
	var numero;
	var divisores=0;
	numero=prompt("Ingrese el numero del cual quiere calcular sus divisores: ");
	for(num=1;num<=numero;num++)
	{
		if (numero%num==0) 
		{
			alert("Los divisores de "+numero+" son: "+num);
			divisores=divisores+1;
		}
	}
	alert("La cantidad de numeros divisores encontrados es: "+divisores);



}//FIN DE LA FUNCIÓN

/*
		alert(num);
		divisores=divisores+1;
*/
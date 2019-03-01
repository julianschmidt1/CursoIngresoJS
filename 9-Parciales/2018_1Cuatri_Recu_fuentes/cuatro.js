function mostrar()
{
	var numero1;
	var numero2;
	var division;
	var suma;
	var mensaje;

	numero1=prompt("Ingrese el primer numero: ");
	numero2=prompt("Ingrese el segundo numero: ");

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	if (numero1==numero2) 
	{
		alert(""+numero1 + numero2);
	} else
	{
	if (numero1>numero2) 
	{
		division=numero1/numero2;
		alert("La division es "+division);
		
	} else
	{
		
		suma=numero1+numero2;
	}
	if (suma<50) 
	{
		alert("La suma es: "+suma+" y es menor a 50.");
	}
	}
}
//mayor, mayor a 100 10&desc, +50 5% desc, menor a 50 sumar 15%
































/*
	var importe1;
	var importe2;
	var importe3;
	var importe4;
	var mayor;
	var mensaje="";
	var aumento;
	var descuento;
	var importefinal;
	var suma;

	importe1=prompt("Ingrese el primer importe: ");
	importe2=prompt("Ingrese el segundo importe: ");
	importe3=prompt("Ingrese el tercer importe: ");
	importe4=prompt("Ingrese el cuarto importe: ");

	importe1=parseInt(importe1);
	importe2=parseInt(importe2);
	importe3=parseInt(importe3);
	importe4=parseInt(importe4);
	


	if(importe1>importe2 && importe1>importe3 && importe1>importe4)
	{
		mayor=importe1;
	} else
	{
		if(importe2>importe3 && importe2>importe4)
		{
			mayor=importe2;
		} else
		{
			if (importe3>importe4) 
			{
				mayor=importe3;
			} else
			mayor=importe4;
		}
	}
	suma=importe1+importe2+importe3+importe4;

	if (mayor>100) 
	{
		descuento=mayor*0.9;
	} else
	{
		if(mayor>50)
		{
			descuento=mayor*0.95;
		} else
		{
			aumento=mayor*1.15;
			importefinal=mayor+aumento;
		}
	}
	alert("El mayor importe es: "+mayor+". La suma es: "+suma+". El importe final es de: "+importefinal);
*/
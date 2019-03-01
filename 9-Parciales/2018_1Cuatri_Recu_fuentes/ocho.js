function mostrar()
{
	var letra;
	var numero;
	var respuesta='si';
	var cantidadPares=0;
	var cantidadImpares=0;
	var cantidadCeros=0;
	var promedio=0;
	var sumaNegativos=0;
	var numeroMaximo=-101;
	var numeroMinimo=101;
	var letraMaxima;
	var letraMinima;
	var contador=0;
	var promedioPositivos=0;

	while(respuesta!='no')
	{
		letra=prompt("Ingrese una letra: ");
		while(isNaN(letra==true) || letra.length>1 || letra.length==0)
		{
			letra=prompt("Error, ingrese UNA LETRA: ");
		}
		numero=prompt("Ingrese un numero entre -100 y 100: ");
		numero=parseInt(numero);
		while(isNaN(numero) || numero<-100 || numero>100)
		{
			numero=prompt("Error, ingrese un numero valido entre -100 y 100: ");
			numero=parseInt(numero);
		}

		respuesta=prompt("Ingrese no para dejar de ingresar. ");

		if (numero==0) 
		{
			cantidadCeros=cantidadCeros+1; //ceros
		} else
		{
			if (numero%2==0) //pares
			{
				cantidadPares=cantidadPares+1;
			} else
			{
				cantidadImpares=cantidadImpares+1; //impares
			}
		}

		if (numero>0) 
		{
			promedioPositivos=promedioPositivos+numero;
			contador=contador+1; //sumo los numeros
		} else
		{
			sumaNegativos=sumaNegativos+numero;
		}

		if (numero>numeroMaximo) 
		{
			numeroMaximo=numero;
			letraMaxima=letra;
		} else
		if (numero<numeroMinimo) 
		{
			numeroMinimo=numero;
			letraMinima=letra;
		}

		
	}

	promedioPositivos=promedioPositivos/contador;

	alert("La cantidad de numeros pares es: "+cantidadPares);
	alert("La cantidad de numeros impares es: "+cantidadImpares);
	alert("La cantidad de ceros es: "+cantidadCeros);
	alert("El promedio de todos los numeros positivos ingresados es: "+promedioPositivos);
	alert("La suma de todos los numeros negativos es de "+sumaNegativos);
	alert("El numero y letra maximos es: "+numeroMaximo+letraMaxima);
	alert("El numero y letra minimos es: "+numeroMinimo+letraMinima);

}
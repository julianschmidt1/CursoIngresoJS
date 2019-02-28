function mostrar()
{
	var palabra;
	var palabraSoloLetras="";
	var palabraInvertida="";
	palabra=prompt("Ingrese palindromo: ");
	console.log(palabra.length);

	for(i=0;i<palabra.length;i++)
	{
		console.log(palabra[i]);
		if (palabra[i]==" ") 
		{
			continue;
		}
		palabraSoloLetras=palabraSoloLetras+palabra[i];
	}
	for(i=0;i<palabraSoloLetras.length;i++)
	{
		palabraInvertida=palabraSoloLetras[i]+palabraInvertida;
	}

	console.log(palabraSoloLetras);
	console.log(palabraInvertida);
	if (palabraInvertida==palabraSoloLetras) 
	{
		alert("La palabra es un palindromo.");
	} else
	{
		alert("ajjaj no pelotudo ahre.");
	}

}//FIN DE LA FUNCIÓN


/*
	var miArray = new Array();

	miArray[0]=5;
	miArray[1]=74;
	miArray[2]=8;
	miArray[3]=94;
	miArray[4]=5;
	miArray[5]=0;
	miArray[6]=80;
	miArray[7]=789;
	miArray[8]=5;
	miArray[9]=7;

document.write("El contenido del vector es: <br>");

	for(var i=0; i<10; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}
*/
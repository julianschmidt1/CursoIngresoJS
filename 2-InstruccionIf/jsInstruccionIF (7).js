function mostrar()
{
//tomo la edad  
	var edad1;
	var estado;

	edad1=edad.value;
	edad1=parseInt(edad1);
	estado=estadoCivil.value;

	if(estado=="Casado" || estado=="Divorciado")
	{
		if(edad1>=18)
		{
		}
		else
		{
			alert("Es muy pequeño para NO ser soltero.");
		}
	}
	
			/*esta parte va al reves, primero if casado
			y dsp if edad. Sino va a tirar 18 casado 
			muy joven*/


}//FIN DE LA FUNCIÓN
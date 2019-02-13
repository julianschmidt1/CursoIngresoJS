function mostrar()
{
//tomo la edad  
	var edades;
	var estado;

	edades=edad.value;
	estado=estadoCivil.value;
	edades=parseInt(edades);

	if (!(estado=="Soltero")) 
	{
		if(edades<18)
		{}
	} else 
	{
		if(estado=="Soltero")
		{
			if(edades>=18)
			{
				alert("Es soltero y no es menor.");
			}
		}
	}
	


}//FIN DE LA FUNCIÓN
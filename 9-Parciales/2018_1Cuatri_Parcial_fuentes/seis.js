function mostrar()
{
	var hora;

	hora=laHora.value;

	switch(hora)
	{
		case hora:
		if(hora>=6 && hora<=11)
		{
			alert("Es de mañana.");
		} else
		{
			if(hora>=12 && hora<=19)
			{
				alert("Es de tarde.");
			} else
			{
				alert("Es de noche."); //Cualquier horario en este else va a ser de noche
			}							//incluso si es erroneo(el enunciado no especifica.)

		}
		if (hora>=20 && hora<24) 
		{
			alert("A dormir.");
		}
		default:
		if (hora>24 || hora<0) 
		{
			alert("La hora ingresada es inválida.");
		}


		break;

/*		case hora: 
		if (hora>=12 && hora<=19) 
		{
			alert("Es de tarde.");
		} else
		{
			alert("Es de noche.");
		}
		break;
ASI ESTA MAL.
		case hora:
		if (hora>=20 && hora<=24) 
		{
			alert("A dormir.");
		}

		default:
		if (hora>24 || hora<0) 
		{
			alert("La hora ingresada es inválida.");
		} */
	}
}

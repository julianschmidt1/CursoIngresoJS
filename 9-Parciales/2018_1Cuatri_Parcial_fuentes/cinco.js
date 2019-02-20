function mostrar()
{
	var planeta;

	planeta=prompt("Ingrese un planeta y se le dará una breve descripción del mismo.");

	switch(planeta)
	{
		case "tierra":
		alert("Acá vivimos.");
		break;

		case "mercurio":
		case "venus":
		alert("Acá hace mas calor.");
		break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		alert("Acá hace mas frio.");
		break;

		default:
		if(planeta=="pluton")
		{
			alert("Plutón no es considerado un planeta.");
		} else
		{
			alert("El planeta ingresado no se encuentra dentro del sistema solar.");
		}
		break;
	}
}

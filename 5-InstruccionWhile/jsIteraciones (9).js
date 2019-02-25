function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var numero2;
	var respuesta='si';
	var maximo1;
	var minimo1;

	while(respuesta=='si')
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		numero2=prompt("Ingrese otro numero");
		numero2=parseInt(numero2);
		contador=contador+1;
		if (numero>numero2) 
		{
			maximo1=numero;
			minimo1=numero2;
		} else
		{
			minimo1=numero;
			maximo1=numero2;
		}

	respuesta=prompt("Si quiere continuar escriba LITERALMENTE si");
	}
	
document.getElementById('maximo').value=maximo1;
document.getElementById('minimo').value=minimo1;



}//FIN DE LA FUNCIÓN
function mostrar()
{
	var contador=0;
	// declarar variables
	var numero;
	var respuesta='si';
	var max;
	var min;

	while(respuesta=='si')
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		contador=contador+1;
		if (numero>numero) 
		{
			max=numero;
		} else
		{
			min=numero;
		}

	respuesta=prompt("Si quiere continuar escriba LITERALMENTE si");
	}
	
document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;



}//FIN DE LA FUNCIÓN
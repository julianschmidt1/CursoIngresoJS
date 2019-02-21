function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta='si';

	while(respuesta=="si")
	{
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);
	contador=contador+1;
	acumulador=numero+acumulador;
	respuesta=prompt("Si quiere continuar escriba LITERALMENTE si");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
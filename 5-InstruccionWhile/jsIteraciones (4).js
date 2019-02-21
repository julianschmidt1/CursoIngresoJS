function mostrar()
{

	var numero1 = prompt("ingrese un número entre 0 y 10.");
	var contador=0;


	while(numero1<0 || numero1>9)
	{
		alert("Error.");
		numero1=prompt("Ingrese el numero nuevamente.");
		contador=contador+1;
	}
	Numero.value=numero1;

}//FIN DE LA FUNCIÓN
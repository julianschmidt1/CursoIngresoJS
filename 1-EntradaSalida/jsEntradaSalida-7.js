/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNro;
	var segundoNro;
	var suma;

	primerNro=numeroUno.value;
	segundoNro=numeroDos.value;
	
	primerNro=parseInt(primerNro);
	segundoNro=parseInt(segundoNro);

	suma=primerNro+segundoNro;

	alert("El resultado es: "+suma);
}

function restar()
{
	var primerNro;
	var segundoNro;
	var resta;

	primerNro=numeroUno.value;
	segundoNro=numeroDos.value;
	
	primerNro=parseInt(primerNro);
	segundoNro=parseInt(segundoNro);

	resta=primerNro-segundoNro;

	alert("El resultado es: "+resta);
}

function multiplicar()
{ 
	var primerNro;
	var segundoNro;
	var multi;

	primerNro=numeroUno.value;
	segundoNro=numeroDos.value;
	
	primerNro=parseInt(primerNro);
	segundoNro=parseInt(segundoNro);

	multi=primerNro*segundoNro;

	alert("El resultado es: "+multi);
}

function dividir()
{
	var primerNro;
	var segundoNro;
	var divi;

	primerNro=numeroUno.value;
	segundoNro=numeroDos.value;
	
	primerNro=parseInt(primerNro);
	segundoNro=parseInt(segundoNro);

	divi=primerNro/segundoNro;

	alert("El resultado es: "+divi);
}


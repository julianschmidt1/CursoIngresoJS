/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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


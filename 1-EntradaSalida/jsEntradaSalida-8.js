/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;

	dividendo=numeroDividendo.value;
	divisor=numeroDivisor.value;

	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);
	resto=parseInt(resto);


	resto=dividendo%divisor;

	alert("El resto es:"+resto);



}
//sueldo*0,2=neto descuento
//sueldo*1,2=neto aumento 20%
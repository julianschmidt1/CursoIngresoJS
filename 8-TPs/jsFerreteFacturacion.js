/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var num1;
	var num2;
	var num3;
	var suma;

	num1=precioUno.value;
	num2=precioDos.value;
	num3=precioTres.value;

	num1=parseInt(num1);
	num2=parseInt(num2);
	num3=parseInt(num3);
	suma=parseInt(suma);

	suma=num1+num2+num3;

	alert("La suma de los numeros da "+suma);

}
function Promedio () 
{
	var num1;
	var num2;
	var num3;
	var promedio;

	num1=precioUno.value;
	num2=precioDos.value;
	num3=precioTres.value;

	num1=parseInt(num1);
	num2=parseInt(num2);
	num3=parseInt(num3);
	promedio=parseInt(promedio);
	
	promedio=(num1+num2+num3)/3;

	alert("El promedio de los numeros da "+promedio);
}
function PrecioFinal () 
{
	var num1;
	var num2;
	var num3;
	var suma;
	var preciofinal;

	num1=precioUno.value;
	num2=precioDos.value;
	num3=precioTres.value;

	num1=parseInt(num1);
	num2=parseInt(num2);
	num3=parseInt(num3);
	suma=parseInt(suma);
	preciofinal=parseInt(preciofinal);
	
	suma=num1+num2+num3;
	preciofinal=(suma)*21/100

	alert("El precio final es "+preciofinal);
}
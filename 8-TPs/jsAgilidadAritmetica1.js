/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
	var primer=Math.floor((Math.random() * 10) + 1);
	var segundo=Math.floor((Math.random() * 10) + 1);
	var operacion=Math.floor((Math.random() * 4) + 1);
	var suma=1;
	var resta=2;
	var divi=3;
	var multi=4;
	console.log(operacion);
	primerNumero.value=primer;
	segundoNumero.value=segundo;

	if(operacion==1)
	{
		operador.value=("Suma");
	} else {
		if(operacion==2)
		{
			operador.value=("Resta");
		} else {
			if(operacion==3)
			{
				operador.value=("Division");
			} else {
				operador.value=("Multiplicacion");
			}
		}
	}


}//FIN DE LA FUNCIÓN
function Responder()
{
	var suma=1;
	var resta=2;
	var divi=3;
	var multi=4;
	var rta;

	

	if(operador.value=="Suma")
	{
		rta=primer+segundo;
	} else {
		if(operador.value=="Resta")
		{
			rta=primer-segundo;
		} else {
			if(operador.value=="Division")
			{
				rta=primer/segundo;
			} else {
				rta=primer*segundo;
			}
		}
	}
	rta=respuesta.value;

}//FIN DE LA FUNCIÓN

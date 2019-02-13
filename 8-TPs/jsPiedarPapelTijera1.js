/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

//var jugador;

function comenzar()
{
	eleccionMaquina=Math.floor((Math.random() * 3) + 1);
	console.log(eleccionMaquina);
	//jugador=prompt("Piedra(1), Papel(2), Tijera(3)");


}//FIN DE LA FUNCIÓN
function piedra()
{
	var piedra=1;
	if(eleccionMaquina==1)
	{
		alert("Empate.");
	} else
	{
		if(eleccionMaquina==2)
		{
			alert("Perdiste.");
		} else
		{
			alert("¡Ganaste!");
		}
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	var papel=2;
	if(eleccionMaquina==1)
	{
		alert("¡Ganaste!");
	} else
	{
		if(eleccionMaquina==2)
		{
			alert("Empate.");
		} else
		{
			alert("Perdiste");
		}
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	var tijera=3;
	if(eleccionMaquina==1)
	{
		alert("Perdiste.");		//LA LOGICA ES CORRECTA, EL ERROR ESTUVO EN PONER "=" Y NO "==" EN EL IF
	} else						//RICO IDIOTA SOY, PERDÍ 30 MIN.
	{
		if(eleccionMaquina==2)
		{
			alert("¡Ganaste!");
		} else
		{
			alert("Empate.");
		}
	}
}//FIN DE LA FUNCIÓN
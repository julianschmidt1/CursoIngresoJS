function mostrar()
{
	var contador = 0;
	var peso;
	var temperatura;
	var nombreAnimal;
	var nombreAnimalMaxima;
	var respuesta = 'si';
	var pares = 0;
	var promedioPeso = 0;
	var contadorNegativos = 0;	
	var maximoPeso = -1;
	var maximaTemperatura = -31;
	var maximoMenor = -1;
	var minimoMenor = 1001;


	while(respuesta !='no'){
		nombreAnimal = prompt("Ingrese el nombre del animal");
		while(isNaN(nombreAnimal == true) || nombreAnimal.length == 0){
			nombreAnimal = prompt("Ingrese una nombre de animal valido");
		}

		peso = prompt("Ingrese un peso entre 0 y 1000");
		peso = parseInt(peso);

		while(isNaN(peso) || peso < 0 || peso > 1000){
			peso = prompt("Error, ingrese un peso valido");
			peso = parseInt(peso);
		}

		promedioPeso = promedioPeso + peso; //sumo los pesos para luego promediarlos

		temperatura = prompt("Ingrese una temperatura");
		temperatura = parseInt(temperatura);

		while(isNaN(temperatura) || temperatura < -30 || temperatura > 30){
			temperatura = prompt("Error, ingrese una temperatura valida");
			temperatura = parseInt(temperatura);
		}
		
		if(temperatura % 2 == 0){
			pares++;
		}

		if(temperatura < 0){				
			contadorNegativos++;
			if(peso > maximoMenor){
				maximoMenor = peso;			
			}
			if(peso < minimoMenor){
				minimoMenor = peso;
			}
		}		

		if(peso > maximoPeso){
			maximaTemperatura = temperatura;
			nombreAnimalMaxima = nombreAnimal;
			maximoPeso = peso;
		}
		contador++;
		respuesta = prompt("Ingrese no para dejar de ingresar");
	}

	promedioPeso = promedioPeso / contador;

	alert("La cantidad de temperaturas pares es de " + pares);
	alert("El nombre del animal mas pesado es " + nombreAnimalMaxima + " y su temperatura es " + maximaTemperatura);
	alert("La cantidad de animales a menos de 0 grados es de: " + contadorNegativos);
	alert("El promedio de peso de todos los animales es " + promedioPeso);
	alert("El peso maximo de los animales cuya temperatura es bajo 0 es: "+maximoMenor+" y la minima: "+minimoMenor);
	

}

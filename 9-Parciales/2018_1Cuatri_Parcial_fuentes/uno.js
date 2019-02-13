
function mostrar()
{
	var nombre1;
	var nombre2;
	var edad1;
	var edad2;
	var edades;

	nombre1=elNombre.value;
	nombre2=elNombre2.value;
	edad1=laEdad.value;
	edad2=laEdad2.value;

	edad1=parseInt(edad1);
	edad2=parseInt(edad2);

	edades=edad1+edad2;

	alert("Ustedes son"+nombre1+" y "+nombre2+",sus edades son "+edad1+edad2+", y la suma de sus edades es de "+edades);

}

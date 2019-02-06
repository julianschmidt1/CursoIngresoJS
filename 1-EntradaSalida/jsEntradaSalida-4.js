/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var dato = document.getElementById("elNombre");
	dato=prompt("Ingrese un dato");
	alert(dato);
}


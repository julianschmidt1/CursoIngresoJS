/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var preciofinal;
 	var cant;
 	var descuento;
 	var marca;
 	var impuesto;

 	cant=Cantidad.value;

 	preciofinal=parseInt(preciofinal);

 	if(cant=<6)
 	{
 		descuento=(preciofinal*50)/100;
 		preciofinal=preciofinal-descuento;
 	}
 	if (cant=5) 
 	{
 		if(marca=="ArgentinaLuz")
 		{
 			descuento=(preciofinal*40)/100;
 			preciofinal=preciofinal-descuento;
 		}
 		else
 		{
 			descuento=(preciofinal*30)/100;
 			preciofinal=preciofinal-descuento;
 		}
 	}
 	if (cant=4) 
 	{
 		if (marca=="ArgentinaLuz" || marca=="FelipeLamparas") 
 		{
 			descuento=(preciofinal*25)/100;
 			preciofinal=preciofinal-descuento;
 		} else
 		{
 			descuento=(preciofinal*20)/100;
 			preciofinal=preciofinal-descuento;
 		}
 	}
 	if(cant=3)
 	{
 		if(marca=="ArgentinaLuz")
 		{
 			descuento=(preciofinal*15)/100;
 			preciofinal=preciofinal-descuento;
 		}
 		if(marca=="FelipeLamparas")
 		{
 			descuento=(preciofinal*10)/100;
 			preciofinal=preciofinal-descuento;
 		} else
 		{
 			descuento=(preciofinal*5)/100:
 			preciofinal=preciofinal-descuento;
 		}
 	}
 	if (preciofinal>120) 
 	{
 		impuesto=(preciofinal*10)/100;
 		preciofinal=preciofinal+impuesto;

 		alert("Usted pago "+preciofinal+" de IIBB, siendo "+impuesto+" el impuesto que se pagó.");
 	}
 	descuento=precioDescuento.value;
}
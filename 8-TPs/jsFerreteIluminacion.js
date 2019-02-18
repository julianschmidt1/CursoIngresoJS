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
 	var precio;
 	var cant;
 	var descuento;
 	var marca1;
 	var impuesto;

 	cant=Cantidad.value;
 	marca1=Marca.value;

 	cant=parseInt(cant);
 	preciofinal=parseInt(preciofinal);

 	precio=cant*35;
 	preciofinal=precio*descuento;

 	if (cant>=6) //0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95
 	{
 		preciofinal=precio*0.5;
 	} 
 	else
 	{
 		if (cant==5) 
 		{
 			if (marca1=="ArgentinaLuz") 
 			{
 				descuento=0.6;
 			}
 			else
 			{
 				descuento=0.7;
 			}
 		} else
 		{
 			if(cant==4)
 			{
 				if (marca1=="ArgentinaLuz" || marca1=="FelipeLamparas") 
 				{
 					descuento=0.75;
 				} else
 				{
 					descuento=0.8;
 				}
 			} else
 			{
 				if (cant==3) 
 				{
 					if (marca1=="ArgentinaLuz") 
 					{
 						descuento=0.85;
 					} else
 					{
 						if(marca1=="FelipeLamparas")
 						{
 							descuento=0.9;
 						} else
 						{
 							descuento=0.95;
 						}
 					}
 				}
 			}
 		}
 	}

 	if(preciofinal>120)
 	{
 		impuesto=(preciofinal*10)/100;
 		preciofinal=preciofinal+impuesto;
 		alert("Usted pago "+preciofinal+" de IIBB, siendo "+impuesto+" el impuesto que se pagó.");
 	}
}
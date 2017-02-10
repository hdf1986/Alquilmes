$("res").addEventListener("keyup",cambio);
$("name1").addEventListener("keyup",cambio);
$("name2").addEventListener("keyup",cambio);
function cambio(e)
{
	var na1="";
	if($("name1").value!="")
	{
		for(var i=0;i<elementos.length;i++)
		{
			if(elementos[i].name.toUpperCase()==$("name1").value.toUpperCase())
			{
				na1=i.toString();
			}
		}
	}

	var na2="";
	if($("name2").value!="")
	{
		for(var i=0;i<elementos.length;i++)
		{
			if(elementos[i].name.toUpperCase()==$("name2").value.toUpperCase())
			{
				na2=i.toString();
			}
		}
	}
	var na3="";
	if($("res").value!="")
	{
		for(var i=0;i<elementos.length;i++)
		{
			if(elementos[i].name.toUpperCase()==$("res").value.toUpperCase())
			{
				na3=i.toString();
			}
		}
	}
	$("c").innerHTML="";
	if(na3=="")
	{
		$("c").innerHTML='elementos.push(new elemento("'+$("res").value+'","'+$("res").value+'",eR));';
		na3=elementos.length.toString();
	}
	$("c").innerHTML=$("c").innerHTML+"<br/>combinaciones.push(new combinacion("+na1+","+na2+",["+na3+"]));//"+$("res").value;
	
}
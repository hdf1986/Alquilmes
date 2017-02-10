function main()
{
	init();

}
var gc=function()
{
	
};

var elementosDesbloqueados = new Array();
function init()
{
	gc.elementos=new Array();
	gc.viewport=tamVentana ();
	$("elementosobj").style.width=gc.viewport[0]+"px";
     window.onresize = function () {
        gc.viewport = tamVentana ();
		$("elementosobj").style.width=gc.viewport[0]+"px";
    }; 
	gc.clicked=false;
	gc.whoare=null;
	cargar();
	crearelemento(0);
	crearelemento(1);
	crearelemento(2);
	crearelemento(3);
	
	actualizarLista();
	/*el.addEventListener("touchstart", isDown, false);  
	el.addEventListener("touchend", isUp, false);  
	//el.addEventListener("touchcancel", handleCancel, false);  
	el.addEventListener("touchleave", handleEnd, false);  
	el.addEventListener("touchmove", isMoving, false);  */
	document.addEventListener("mousedown",isDown,false);
	document.addEventListener("mousemove",isMoving,false);
	document.addEventListener("dblclick",isDblClick,false);
	document.addEventListener("mouseup",isUp,false);
	
}
function actualizarLista()
{
	$("point").innerHTML=elementosDesbloqueados.length.toString()+" / "+elementos.length;
}
function cargar()
{
	if(getCookie("desbloqueados"))
	{
		var j=getCookie("desbloqueados").split("A");
		for(var i=0;i<j.length;i++)
		{
			elementosDesbloqueados.push(pI(j[i]));
		}
	}
	
	
}
function guardar()
{
	setCookie("desbloqueados",elementosDesbloqueados.join("A"));
}
function crearelemento(id)
{
	var elementod = document.createElement("div");
	var avatare = document.createElement("img");
	var name = document.createElement("div");
	var hover = document.createElement("div");
	var idd = document.createElement("div");
	elementod.className="elemento";
	avatare.className="avatare";
	name.className="name "+elementos[id].type;
	hover.className="hover";
	idd.className=id;
	avatare.src="elementos/img/"+elementos[id].img;
	elementod.appendChild(avatare);
	elementod.appendChild(name);
	elementod.appendChild(hover);
	elementod.appendChild(idd);
	elementod.style.left=randomInt(gc.viewport[0]-150)+"px";
	elementod.style.top=randomInt(gc.viewport[1]-150)+"px";
	name.innerHTML=elementos[id].name;
	$("objetos").appendChild(elementod);
	gc.elementos.push(elementod);
	elementosDesbloqueados.push(id);
	elementosDesbloqueados=elementosDesbloqueados.unique();
	actualizarLista();
	guardar();
	
}
function todo()
{
	for(var i=0;i<elementos.length;i++)
	{
	crearelemento(i);
	}
};
function isDown(e)
{
	gc.clicked=true;
	
	if(e.target.parentNode.className=="elemento")
		{
			gc.whoare=e.target.parentNode;
		}
		else if(e.target.id=="borrar")
		{
		while (gc.elementos.length>0)
			{
				eliminar(gc.elementos[gc.elementos.length-1]);
			}
		}
}
function isDblClick(e)
{
	if(e.target.parentNode.className=="elemento")
		{
		var elementoADuplicar=parseInt(e.target.parentNode.childNodes[3].className);
		crearelemento(elementoADuplicar);
		Notification.push("Duplicado:"+elementos[elementoADuplicar].name);
		}
		else if(e.target.id=="borrar")
		{
		borrar();
		}
		else
		{
		fourbasic(e);
		}
}
function isMoving(e)
{

	if(gc.clicked)
	{
		var x=e.pageX-32;
		var y=e.pageY-32;
		if(gc.whoare!=null)
		{
			gc.whoare.style.left=x+"px";
			gc.whoare.style.top=y+"px";
		}
		
	}
	

}
function isUp(e)
{
	gc.clicked=false;
	if(gc.whoare!=null)
	{	var j=revisar(gc.whoare)
		if(j)
		{
			var it1=j.childNodes[3].className;
			var it2=gc.whoare.childNodes[3].className;
			for(var i=0;i<combinaciones.length;i++)
			{
				if(combinaciones[i].id1==it1&&combinaciones[i].id2==it2)
				{

						var elementosresultantes="";
					for(var d=0;d<combinaciones[i].R.length;d++)
						{
						crearelemento(combinaciones[i].R[d]);
							if(d>1)
								{
									elementosresultantes=elementosresultantes+"+"+elementos[combinaciones[i].R[d]].name;
								}
								else
								{
									elementosresultantes=elementosresultantes+elementos[combinaciones[i].R[d]].name;
		
								}
						}
						Notification.push(elementos[it1].name+"+"+elementos[it2].name+"="+elementosresultantes);
					
					eliminar(j);
					eliminar(gc.whoare);
				}
				else 
				{
					if(combinaciones[i].id2==it1&&combinaciones[i].id1==it2)
					{
						var elementosresultantes="";
						for(var d=0;d<combinaciones[i].R.length;d++)
						{
							crearelemento(combinaciones[i].R[d]);
							if(d>1)
							{
								elementosresultantes=elementosresultantes+"+"+elementos[combinaciones[i].R[d]].name;
							}
							else
							{
								elementosresultantes=elementosresultantes+elementos[combinaciones[i].R[d]].name;
	
							}
						}
						Notification.push(elementos[it2].name+"+"+elementos[it1].name+"="+elementosresultantes);
					eliminar(j);
					eliminar(gc.whoare);
					}
					else
					{
					}
				}
				
			}
		};

	}
	gc.whoare=null;
	

}
function fourbasic(e)
{
	crearelemento(0);
	crearelemento(1);
	crearelemento(2);
	crearelemento(3);
	Notification.push("Creados los 4 basicos");
}
function eliminar(div)
{
	gc.elementos=gc.elementos.delete(gc.elementos.indexOf(div));
	$("objetos").removeChild(div);
}
function borrar()
{
	while (gc.elementos.length>0)
	{
		eliminar(gc.elementos[gc.elementos.length-1]);
	}
	elementosDesbloqueados=new Array();
	fourbasic("Alan");
}
function plusboard()
{
	if($("plusdiv").style.display=="block")
	{
		$("plusdiv").style.display="none";
		$("bo").style.display="block";
	}
	else
	{
		$("plusdiv").style.display="block";
		$("bo").style.display="none";
	}
	
	var d = document.getElementById("elementosobj");
	while (d.hasChildNodes())
	{
		d.removeChild(d.firstChild);
	}
	var Lista=new Array();
	for(var i=0;elementosDesbloqueados.length>i;i++)
	{
		
		Lista.push(elementos[elementosDesbloqueados[i]].name);
		//crearelementoficticio(elementosDesbloqueados[i],i);
	}
	var Listad=Lista.sort();
	for(var i=0;Listad.length>i;i++)
	{
		var na1=null;
		for(var j=0;j<elementos.length;j++)
		{
			if(elementos[j].name.toUpperCase()==Listad[i].toUpperCase())
			{
				na1=j;
			}
		}
		crearelementoficticio(na1,i);
	}
}
function crearelementoficticio(id,i)
{
	var elemento = document.createElement("div");
	var avatare = document.createElement("img");
	var name = document.createElement("div");
	var idd = document.createElement("div");
	var hover = document.createElement("div");
	var elementosH=Math.round(gc.viewport[0]/80-1);
	elemento.className="elementoI";
	avatare.className="avatare";
	name.className="name "+elementos[id].type;
	hover.className="hoverI";
	idd.className=id;
	avatare.src="elementos/img/"+elementos[id].img;
	elemento.appendChild(avatare);
	elemento.appendChild(name);
	elemento.style.left=(i%elementosH)*80+"px";
	elemento.appendChild(hover);
	elemento.appendChild(idd);
	name.innerHTML=elementos[id].name;
	$("elementosobj").appendChild(elemento);
	//hover.style.left=i*70+"px";
	elemento.style.top=(Math.floor(i/elementosH))*130+"px";
	hover.style.height=elemento.offsetHeight+"px";
	/*hover.style.marginTop="-"+hover.style.height;*/
	hover.addEventListener("click",
	function(e){
		var i=
		parseInt(e.target.parentNode.childNodes[3].className);
		crearelemento(i);
		Notification.push("Creado:"+elementos[i].name);
		$("plusdiv").style.display="none";
		$("bo").style.display="block";
	}
	);

}
function revisar(di)
{
	var TC=new Array();
	var A=new Vector2(pI(di.style.left),pI(di.style.top));
	var B=new Vector2(pI(di.style.left)+64,pI(di.style.top));
	var C=new Vector2(pI(di.style.left),pI(di.style.top)+getRealHeight(di));
	var D=new Vector2(pI(di.style.left)+64,pI(di.style.top)+getRealHeight(di));
	var TA=gc.elementos.delete(gc.elementos.indexOf(di));
	var LO=false;
	for(var i=0;i<TA.length;i++)
	{
		TC=new Array();
		if(isInEx(A,TA[i]))
		{
			TC.push("A");
		}
		if(isInEx(B,TA[i]))
		{
			TC.push("B");
		}
		if(isInEx(C,TA[i]))
		{
			TC.push("C");
		}
		if(isInEx(D,TA[i]))
		{
			TC.push("D");
		}
		if(TC.length>0)
		{
			LO=TA[i];
			//console.log(TC);
		}
	}
	//console.log(LO.childNodes[1].innerHTML);
	return LO;

}
/*window.log = function(){
  log.history = log.history || [];
  log.history.push(arguments);
  if(this.console) {
      arguments.callee = arguments.callee.caller;
      console.log( Array.prototype.slice.call(arguments) );
  }
};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});
*/
function $() {
    var elements = new Array();
    for (var i = 0; i <arguments.length; i++) {
        var element = arguments[i];
        if (typeof element == "string") {
            element = document.getElementById(element);

        }
        if (arguments.length == 1) {
            return element;
        }
        elements.push(element);
    }
    return elements;
}
function randomInt(max)
{
    return Math.floor(Math.random()*(max+1));
}
function randomFloat()
{
    return Math.random();
}

function tamVentana () {
var Tamanyo = [0, 0];
if (typeof window.innerWidth != 'undefined')
{
Tamanyo = [
window.innerWidth,
window.innerHeight
];
}
else if (typeof document.documentElement != 'undefined'
&& typeof document.documentElement.clientWidth !=
'undefined' && document.documentElement.clientWidth != 0)
{
Tamanyo = [
document.documentElement.clientWidth,
document.documentElement.clientHeight
];
}
else {
Tamanyo = [
document.getElementsByTagName ('body')[0].clientWidth,
document.getElementsByTagName ('body')[0].clientHeight
];
}
return Tamanyo;
}

if (!Array.prototype.indexOf)
{
Array.prototype.indexOf = function( v, b, s ) {
for( var i = +b || 0, l = this.length; i < l; i++ ) {
if( this[i]===v || s && this[i]==v ) { return i; }
}
return -1;
};
}
if (!Array.prototype.unique)
{
Array.prototype.unique = function( b ) {
var a = [], i, l = this.length;
for( i=0; i<l; i++ ) {
if( a.indexOf( this[i], 0, b ) < 0 ) { a.push( this[i] ); }
}
return a;
};
};

Array.prototype.delete = function( b ) {
    var newarray=new Array();
   for(var i=0;i<this.length;i++) 
   {
       if(i!=b)
       {
           newarray.push(this[i]);
       }
   }
   return newarray;
};
var Vector2=function(x,y)
{
    this.x=x;
    this.y=y;
}
function isIn(xo,yo,x,y,width,height)
{
     
    
    if(xo>=x&&xo<=x+width)
    {
        if(yo>=y&&yo<=y+height)
        {
            //ctx.fillRect(x,y,width,height); 
            return true;
        }
        else
        {
        return false;
        }
    }
    else
    {
        return false;
    }
    return false;
}
function getRealHeight(did)
{
    if(did.clientHeight)
    {
        return did.clientHeight;
    }
    else 
    {
        return did.innerHeight;
    }


}
function pI(d)
{
    return parseInt(d);
}
function isInEx(A,B)
{
    if(isIn(A.x,A.y,pI(B.style.left),pI(B.style.top),pI(64),getRealHeight(B)))
    {
        return true
    }
    else
    {
        return false;
    }
}
function setCookie(c_name,value)
{
var exdate=new Date();
exdays=900;
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}
function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}
var notificationdf = function()
{
};
notificationdf.prototype.push=function (argument) {
    var spans=document.createElement("span");
    spans.innerHTML=argument;
    spans.className="notification";

    $("notification").appendChild(spans);
    setTimeout(function(e){$("notification").removeChild($("notification").firstChild)},5000);
}
var Notification=new notificationdf;

var boton=document.getElementById('boton');
boton.addEventListener("click", operacion);

function operacion()
{
    var entrada1=document.getElementById('c1').value;
    var entrada2=document.getElementById('c2').value;
    var coordenada1=parseFloat(entrada1);
    var coordenada2=parseFloat(entrada2);
    var respuesta=document.getElementById('respuesta');

    if(coordenada1>0 && coordenada2>0)
    {
        respuesta.innerHTML="Q1";
    }
    else if(coordenada1>0 && coordenada2<0)
    {
        respuesta.innerHTML="Q4";
    }
    else if(coordenada1<0 && coordenada2>0)
    {
        respuesta.innerHTML="Q2";
    }
    else if(coordenada1<0 && coordenada2<0)
    {
        respuesta.innerHTML="Q3";
    }
    else if (coordenada1==0 && coordenada2==0) {
        respuesta.innerHTML="Origen";
    }

}

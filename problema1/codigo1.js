
var boton=document.getElementById('boton');
var div=document.getElementById('respuesta');

function operacion()
{

    var input=document.getElementById("radio").value;
    var radio=parseFloat(input);
    var respuesta=((4.0/3)*3.14159*radio*radio*radio).toFixed(3);
    div.innerHTML="VOLUMEN = "+String(respuesta);

}
boton.addEventListener("click", operacion);

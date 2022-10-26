/*$('#btnHoraAsincrono').click(function () {
    var solicitud = new XMLHttpRequest();
    solicitud.onload = function () {
        document.getElementById("hora").value=solicitud.responseText;
    }
});*/

//$('#btnHoraSincrono').click


/*var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
  e.preventDefault();
  console.log("click");
})*/ 


window.onload = function(){
  document.getElementById("btnAjax").addEventListener("click",pedirHeader);
  document.getElementById("btnReset").addEventListener("click",iniciarHeader);



function pedirHeader()
{
  var solicitud= new XMLHttpRequest();
  solicitud.onreadystatechange = function()
  {
    if(solicitud.readyState == 4 && solicitud.status==200)
    {
      document.getElementById("registro").innerHTML = solicitud.responseText;
    }
  };
 solicitud.open("GET", "01_cargarArchivo.txt", true);
 solicitud.send();
}

function iniciarHeader()
{
  document.getElementById("registro").innerHTML = "<h2>Formulario</h2>";
}

}




/*document.getElementById("BotonRegistro").addEventListener('click', function () {
  console.log("clik en el boton registro")
});*/
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



/* evento para escuchar el click

  document.getElementById("BotonRegistro").addEventListener('click', function () {
  console.log("clik en el boton registro")
});*/


window.onload = function(){
  document.getElementById("btnRegistro").addEventListener("click",hacerRegistro);

function hacerRegistro()
{
  var solicitud= new XMLHttpRequest();
  solicitud.onreadystatechange = function()
  {
    if(solicitud.readyState == 4 && solicitud.status == 200)
    {
      document.getElementById("h").innerHTML = solicitud.responseText;
    }
  };
 solicitud.open("GET", "01_cargarArchivo.txt", true);
 solicitud.send();
}

function iniciarHeader()
{
  document.getElementById("h").innerHTML = "<h2>Mensaje</h2>";
}

}

window.onload = function(){
  document.getElementById("btnAjax").addEventListener("click",pedirHeader);
  document.getElementById("btnReset").addEventListener("click",iniciarHeader);

function pedirHeader()
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
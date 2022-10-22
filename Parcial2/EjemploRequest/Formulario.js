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

document.querySelector('#BotonRegistro').addEventListener('click', Datos);

function Datos()
{
  var solicitud = new XMLHttpRequest();

   
}

/*document.getElementById("BotonRegistro").addEventListener('click', function () {
  console.log("clik en el boton registro")
});*/
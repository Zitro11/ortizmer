/*$('#btnHoraAsincrono').click(function () {
    var solicitud = new XMLHttpRequest();
    solicitud.onload = function () {
        document.getElementById("hora").value=solicitud.responseText;
    }
});*/

//$('#btnHoraSincrono').click

const btnRegistrar = document.querySelector('#BotonRegistro');

btnRegistrar.addEventListener('click', function () {
  console.log('clik en el boton registro')
});
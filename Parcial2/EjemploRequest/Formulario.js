$('#btnHoraAsincrono').click(function () {
    var solicitud = new XMLHttpRequest();
    solicitud.onload = function () {
        document.getElementById("hora").value=solicitud.responseText;
    }
});

$('#btnHoraSincrono').click
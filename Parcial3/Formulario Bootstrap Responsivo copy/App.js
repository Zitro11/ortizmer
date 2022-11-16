
//Datos formulario a modal
const boton = document.querySelector('#btnRegistro');
boton.addEventListener('click' , function(e){
  e.preventDefault();

  //Datos personales
  var Nombre = document.getElementById('nombres').value;
  var Apellido = document.getElementById('apellidos').value;
  var Correo = document.getElementById('correo').value;
  var Genero = document.getElementById('genero').value;
  var Telefono = document.getElementById('telefono').value;
  var Nacimiento = document.getElementById('fecha').value;

  document.getElementById('NombreM').innerHTML = Nombre;
  document.getElementById('ApellidoM').innerHTML = Apellido;
  document.getElementById('CorreoM').innerHTML = Correo;
  document.getElementById('GeneroM').innerHTML = Genero;
  document.getElementById('TelefonoM').innerHTML = Telefono;
  document.getElementById('NacimientoM').innerHTML = Nacimiento;

  //Datos vuelo
  var Origen = document.getElementById('origen').value;
  var Destino = document.getElementById('destino').value;
  var Aero = document.getElementById('aerolinea').value;
  var Pasajeros = document.getElementById('pasajeros').value;
  var Ida = document.getElementById('ida').value;
  var Vuelta = document.getElementById('vuelta').value;

  document.getElementById('OrigenM').innerHTML = Origen;
  document.getElementById('DestinoM').innerHTML = Destino;
  document.getElementById('AerolineaM').innerHTML = Aero;
  document.getElementById('PasajerosM').innerHTML = Pasajeros;
  document.getElementById('IdaM').innerHTML = Ida;
  document.getElementById('VueltaM').innerHTML = Vuelta;

  //console.log(Nombre,Apellido,Correo,Genero,Telefono,Nacimiento);

})






//CODIGO DEL TOAST//
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  })
}
//FIN CODIGO DEL TOAST//
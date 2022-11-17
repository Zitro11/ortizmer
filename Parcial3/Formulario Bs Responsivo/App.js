
//Datos formulario a modal//
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
//Fin Datos formulario a modal//

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


//CODIGO PARA LLENAR DATOS//
document.getElementById("llenarCampos").addEventListener("click", function()
  {
    console.log("click");
    fetch('App.php').then(respuesta => respuesta.json()).then(dato => console.log(dato));
    function refrescar(reg)
      {
        document.getElementById("NombreM").value =reg.Nombre;
        document.getElementById("ApellidM").value = reg.Apellido;
        document.getElementById("CorreoM").value = reg.Correo;
        document.getElementById("GeneroM").value = reg.Genero;
        document.getElementById("TelefonoM").value = reg.Telefono;
        document.getElementById("NacimientoM").value = reg.Nacimiento;
        document.getElementById("OrigenM").value = reg.Origen;
        document.getElementById("DestinoM").value = reg.Destino;
        document.getElementById("AerolineaM").value = reg.Aero;
        document.getElementById("PasajerosM").value = reg.Pasajeros;
        document.getElementById("IdaM").value = reg.Ida;
        document.getElementById("VueltaM").value = reg.Vuelta;
      }
  });
//FIN CODIGO PARA LLENAR DATOS//

//CODIGO DEL TOAST//
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    
    try {
      let Nombre = document.getElementById("Nombre").value;
      let Apellidos = document.getElementById("Apellidos").value;
      let Correo = document.getElementById("Correo").value;
      let Telefono = document.getElementById("Telefono").value;
      let Fecha = document.getElementById("Fecha").value;
      let Origen = document.getElementById("Origen").value;
      let Destino = document.getElementById("Destino").value;
      let Pasajeros = document.getElementById("Pasajeros").value;
      let Ida = document.getElementById("Ida").value;
      let Vuelta = document.getElementById("Vuelta").value;


      if (Nombre == "" || Apellidos == "" || Correo == "" || Telefono == ""
          || Fecha == "" || Origen == "" || Destino == "" || Pasajeros == ""
          || Ida == "" || Vuelta == "") 
          {
          swal("Error", "Favor de llenar todos los campos", "error");
          let btnRegistro = document.getElementById("btnRegistro");
          btnRegistro.disabled = true;
      } 
      else {
        var toast = new bootstrap.Toast(toastLiveExample)
          toast.show()
          let btnRegistro = document.getElementById("btnRegistro");
          btnRegistro.disabled = false;
       }
      } 
    catch (exception) {
      swal("Error","Ha ocurrido un error","error");
      }
  })
}
//FIN CODIGO DEL TOAST//

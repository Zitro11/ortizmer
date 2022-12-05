
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
          let btnModificar = document.getElementById("btnModificar");
          btnModificar.disabled = true;
      } 
      else {
        var toast = new bootstrap.Toast(toastLiveExample)
          toast.show()
          let btnModificar = document.getElementById("btnModificar");
          btnModificar.disabled = false;
       }
      } 
    catch (exception) {
      swal("Error","Ha ocurrido un error","error");
      }
  })
}
//FIN CODIGO DEL TOAST//





document.getElementById("btnID").addEventListener("click", async(event)=> {
    event.preventDefault();

    let id = document.getElementById("id_Consulta").value;
    if(id=="")
    {
      swal("Error", "Favor de llenar todos los campos para la busqueda", "error");
    }
    else
    {
      var datosFormulario = new FormData(document.getElementById("formulario"));
      let respuesta = await fetch ('FormularioBS ModificarVueloC.php',{
      method : 'POST',
      body: datosFormulario
      })
      let dato = await respuesta.json();

      document.getElementById("Nombre").value = dato.Nombre;
      document.getElementById("Apellidos").value = dato.Apellido;
      document.getElementById("Correo").value = dato.Correo;
      document.getElementById("Genero").value = dato.Genero;
      document.getElementById("Telefono").value = dato.Telefono;
      document.getElementById("Fecha").value = dato.Nacimiento;
      document.getElementById("Origen").value = dato.Origen;
      document.getElementById("Destino").value = dato.Destino;
      document.getElementById("Aerolinea").value = dato.Aerolinea;
      document.getElementById("Pasajeros").value = dato.Pasajeros;
      document.getElementById("Ida").value = dato.Ida;
      document.getElementById("Vuelta").value = dato.Vuelta;
    }
});
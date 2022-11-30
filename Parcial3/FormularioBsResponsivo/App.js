
//Datos formulario a modal//
const boton = document.querySelector('#btnRegistro');
boton.addEventListener('click' , function(e){
  e.preventDefault();

  //Datos personales
  var Nombre = document.getElementById('Nombres').value;
  var Apellido = document.getElementById('Apellidos').value;
  var Correo = document.getElementById('Correo').value;
  var Genero = document.getElementById('Genero').value;
  var Telefono = document.getElementById('Telefono').value;
  var Nacimiento = document.getElementById('Fecha').value;

  document.getElementById('NombreM').innerHTML = Nombre;
  document.getElementById('ApellidoM').innerHTML = Apellido;
  document.getElementById('CorreoM').innerHTML = Correo;
  document.getElementById('GeneroM').innerHTML = Genero;
  document.getElementById('TelefonoM').innerHTML = Telefono;
  document.getElementById('NacimientoM').innerHTML = Nacimiento;

  //Datos vuelo
  var Origen = document.getElementById('Origen').value;
  var Destino = document.getElementById('Destino').value;
  var Aero = document.getElementById('Aerolinea').value;
  var Pasajeros = document.getElementById('Pasajeros').value;
  var Ida = document.getElementById('Ida').value;
  var Vuelta = document.getElementById('Vuelta').value;

  document.getElementById('OrigenM').innerHTML = Origen;
  document.getElementById('DestinoM').innerHTML = Destino;
  document.getElementById('AerolineaM').innerHTML = Aero;
  document.getElementById('PasajerosM').innerHTML = Pasajeros;
  document.getElementById('IdaM').innerHTML = Ida;
  document.getElementById('VueltaM').innerHTML = Vuelta;

  document.getElementById('btnGuardarModal').addEventListener("click", async () =>{
    swal("VUELO REGISTRADO", "VUELA PRONTO!", "success");
  })

})
//Fin Datos formulario a modal//



//CODIGO DEL TOAST//
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    
    try {
      let Nombre = document.getElementById("Nombres").value;
      let Apellidos = document.getElementById("Apellidos").value;
      let Correo = document.getElementById("Correo").value;
      let Telefono = document.getElementById("Telefono").value;
      let Fecha = document.getElementById("Fecha").value;
      let Origen = document.getElementById("Origen").value;
      let Destino = document.getElementById("Destino").value;
      let Pasajeros = document.getElementById("Pasajeros").value;
      let Ida = document.getElementById("Ida").value;
      let Vuelta = document.getElementById("Vuelta").value;
      let Terminos = document.getElementById('chBox').checked;
      if(Terminos.checked==true)
      {
        let TerminosV =1;
      }
      else{
        let TerminosV =0;
      }

      if (Nombre == "" || Apellidos == "" || Correo == "" || Telefono == ""
          || Fecha == "" || Origen == "" || Destino == "" || Pasajeros == ""
          || Ida == "" || Vuelta == "" || Terminos==0) {
          swal("Error", "Favor de llenar todos los campos", "error");
      } 
      else {
        var toast = new bootstrap.Toast(toastLiveExample)
          toast.show()
       }
      } 
    catch (exception) {
      swal("Error","Ha ocurrido un error","error");
      }
  })
}
//FIN CODIGO DEL TOAST//


//CODIGO PARA LLENAR DATOS//
document.getElementById("llenarCampos").addEventListener("click",async () =>{
  let respuesta= await fetch ('App.php');
  let dato =await respuesta.json();
    document.getElementById("Nombres").value = dato.Nombre;
    document.getElementById("Apellidos").value = dato.Apellido;
    document.getElementById("Correo").value = dato.Correo;
    document.getElementById("Genero").value = dato.Genero;
    document.getElementById("Telefono").value = dato.Telefono;
    document.getElementById("Fecha").value = dato.Fecha;
    document.getElementById("Origen").value = dato.Origen;
    document.getElementById("Destino").value = dato.Destino;
    document.getElementById("Aerolinea").value = dato.Aerolinea;
    document.getElementById("Pasajeros").value = dato.Pasajeros;
    document.getElementById("Ida").value = dato.Ida;
    document.getElementById("Vuelta").value = dato.Vuelta;
  });
//FIN CODIGO PARA LLENAR DATOS//
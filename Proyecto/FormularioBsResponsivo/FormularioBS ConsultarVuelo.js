document.getElementById("Consultar").addEventListener("click", async(event)=> {
    event.preventDefault();

    let Nombre = document.getElementById("Nombre").value;
    let Apellidos = document.getElementById("Apellidos").value;
    if(Nombre=="" || Apellidos=="")
    {
      swal("Error", "Favor de llenar todos los campos para la busqueda", "error");
    }
    else
    {
      var datosFormulario = new FormData(document.getElementById("formulario"));
      let respuesta = await fetch ('FormularioBS ConsultarVuelo.php',{
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

async function TraerDatos(){
  let headersList = { "Accept": "*/*"}

  let response = await fetch("http://localhost/ortizmer/Proyecto/FormularioBsResponsivo/FormularioBS%20ConsultarVuelo2.php", { 
    method: "GET",
    headers: headersList
  });

  let datos = await response.json();

  new gridjs.Grid({
          columns: ["id", "Nombre", "Apellido", "Correo", "Genero", "Telefono", "Nacimiento", "Origen", "Destino",
                    "Aerolinea", "Pasajeros", "Ida", "Vuelta",],
          data: datos 
          }).render(document.getElementById("wrapper"));
}
TraerDatos(); 
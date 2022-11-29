document.getElementById("llenarCampos").addEventListener("click", async(event)=> {
    event.preventDefault();
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
});


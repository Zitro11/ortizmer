document.getElementById("button").addEventListener("click", async(event)=> {
    event.preventDefault();
    var datosFormulario = new FormData(document.getElementById("form"));
    let respuesta = await fetch ('formDataP.php',{
      method : 'POST',
      body: datosFormulario
    })
    let dato = await respuesta.json();

    document.getElementById("Id").value = dato.id_empleado;
    document.getElementById("Nombre").value = dato.Nombre;
    document.getElementById("Apellido").value = dato.Apellido;
    document.getElementById("Telefono").value = dato.Telefono;
    document.getElementById("Edad").value = dato.Edad;
});


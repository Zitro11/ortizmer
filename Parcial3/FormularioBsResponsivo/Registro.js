/*document.getElementById('btnRegistrarse').addEventListener('click',function(e){
    e.preventDefault();

    window.location.href = "./Login.html";
})*/

document.getElementById("btnRegistrarse").addEventListener("click", async(event)=> {
    event.preventDefault();
    var datosFormulario = new FormData(document.getElementById("form"));
    let respuesta = await fetch ('Registro.php',{
      method : 'POST',
      body: datosFormulario
    })
    /*let dato = await respuesta.json();

    document.getElementById("Usuario").value = dato.Usuario;
    document.getElementById("Contraseña").value = dato.Contraseña;
    document.getElementById("Correo").value = dato.Correo;*/
});
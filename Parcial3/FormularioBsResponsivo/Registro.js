$(document).ready(function(){

    $('#btnIniciar').click(function(e) {
        e.preventDefault();
        try {
            let Usuario = document.getElementById("Usuario").value;
            let Contraseña = document.getElementById("Contraseña").value;
            let Correo = document.getElementById("Correo").value;

            if (Usuario == "" || Contraseña == "" || Correo == "") {
                swal("Error", "No deje campos vacios", "error");
            } else {
                $.post('./Registro.php',{Usuario, Contraseña, Correo},'json');
                swal("Registrar cuenta","Se ha registrado tu cuenta correctamente","success");
            }
        } catch (exception) {
            swal("Error","Ha ocurrido un error","error");
        }
    });
});
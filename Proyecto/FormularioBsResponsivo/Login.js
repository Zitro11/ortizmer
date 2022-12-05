$(document).ready(function(){
    $('#btnIniciar').click(function(e) {
        e.preventDefault();

        try{
            let usuario = document.getElementById('Usuario').value;
            let pass = document.getElementById('Contraseña').value;

            if (usuario=='' || pass=='') {
                swal("Error", "Campo vacios", "error");
            }
            else{
                $.post('./Login.php',{usuario},'json');
                swal("INICIO DE SESION","Bienvenido!","success");
            }
        }
        catch (e) { 
            swal("Error","Ha ocurrido un error","error");
        }

    });
});
<?php

$ID = $_POST['id_Consulta'];

$servidor = "localhost";
$basededatos = "VIAJES";
$usuario = "root";
$password = "";


$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die ("No se conecto");

$Update = "DELETE FROM VUELO WHERE id='$ID'";  

$query = mysqli_query($con, $Update) or die ("Problema en el select");

if($query)
{
    echo "<script> alert('Se elimino el Vuelo'); 
                   location.href = 'FormularioBS CancelarVuelo.html';
          </script>";
    
}
else
{
    echo "<script> alert('No se elimino el Vuelo'); 
                   location.href = 'FormularioBS CancelarVuelo.html';
    </script>";
}

?>


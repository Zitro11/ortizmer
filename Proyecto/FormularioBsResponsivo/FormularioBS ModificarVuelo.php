<?php

$ID = $_POST['id_Consulta'];

$Nombre = $_POST['Nombre'];
$Apellidos = $_POST['Apellidos'];
$Correo = $_POST['Correo'];
$Genero = $_POST['Genero'];
$Telefono = $_POST['Telefono'];
$Fecha = $_POST['Fecha'];
$Origen = $_POST['Origen'];
$Destino = $_POST['Destino'];
$Aerolinea = $_POST['Aerolinea'];
$Pasajeros = $_POST['Pasajeros'];
$Ida = $_POST['Ida'];
$Vuelta = $_POST['Vuelta'];

$servidor = "localhost";
$basededatos = "VIAJES";
$usuario = "root";
$password = "";


$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die ("No se conecto");

$Update = "UPDATE VUELO SET Nombre='$Nombre', Apellido='$Apellidos', Correo='$Correo', Genero='$Genero', Telefono=$Telefono, Nacimiento='$Fecha', Origen='$Origen', Destino='$Destino',
                             Aerolinea='$Aerolinea', Pasajeros=$Pasajeros, Ida='$Ida', Vuelta='$Vuelta' WHERE id='$ID'";  

$query = mysqli_query($con, $Update) or die ("Problema en el select");

if($query)
{
    echo "<script> alert('Se Actualizo el Vuelo'); 
                   location.href = 'FormularioBS ModificarVuelo.html';
          </script>";
    
}
else
{
    echo "<script> alert('No se Actualizo el Vuelo'); 
                   location.href = 'FormularioBS ModificarVuelo.html';
    </script>";
}

?>


<?php


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

$Insertar = "INSERT INTO VUELO VALUES (NULL,'$Nombre', '$Apellidos', '$Correo','$Genero',$Telefono,'$Fecha','$Origen', '$Destino','$Aerolinea',$Pasajeros,'$Ida','$Vuelta')";  

$query = mysqli_query($con, $Insertar) or die ("Problema en el select");

if($query)
{
    echo "<script> alert('Vuelo Registrado'); 
                   location.href = 'FormularioBS copy.html';
          </script>";
    
}
else
{
    echo "<script> alert('No se realizo el registro'); 
    location.href = 'FormularioBS copy.html';
    </script>";
}

?>


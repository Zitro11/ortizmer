<?php

$Nombre = $_POST['vNombre'];
$Apellidos = $_POST['vApellidos'];
$Correo = $_POST['vCorreo'];
$Genero = $_POST['vGenero'];
$Telefono = $_POST['vTelefono'];
$Fecha = $_POST['vNacimiento'];
$Origen = $_POST['vOrigen'];
$Destino = $_POST['vDestino'];
$Aerolinea = $_POST['vAero'];
$Pasajeros = $_POST['vPasajeros'];
$Ida = $_POST['vIda'];
$Vuelta = $_POST['vVuelta'];


$servidor = "localhost";
$basededatos = "VIAJES";
$usuario = "root";
$password = "root";

$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die ("No se conecto");
$consulta = "insert into VUELO (id,Nombre,Apellido,Correo,Genero,Telefono,Nacimiento,Origen,Destino,Aerolinea,Pasajeros,Ida,Vuelta) 
            VALUES ('NULL','$Nombre', '$Apellidos', '$Correo','$Genero',$Telefono,'$Fecha','$Origen', '$Destino','$Aerolinea',$Pasajeros,'$Ida','$Vuelta')";  

$registros = mysqli_query($con,$consulta) or die ("Problema en el select");

$result = mysqli_fetch_all($registros);
mysqli_close($con);
?>


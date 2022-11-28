<?php

$usuario = $_POST['Usuario'];
$contraseña = $_POST['Contraseña'];
$correo = $_POST['Correo'];

$servidor = "localhost";
$basededatos = "viajes";
$usuario = "root";
$password = "root";

$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die ("No se conecto");
$consulta = "INSERT INTO USUARIOS (id, Usuario, Contraseña, Correo) VALUES (NULL,'$usuario' , '$contraseña', $correo)";   

$registros = mysqli_query($con,$consulta) or die ("Problema en el INSERT");

$result = mysqli_fetch_array($registros,MYSQLI_ASSOC);
echo json_encode($result);
?>

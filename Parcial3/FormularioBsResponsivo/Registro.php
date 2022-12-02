<?php

$servidor = "localhost";
$basededatos = "VIAJES";
$usuario = "root";
$password = "root";

$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die ("No se conecto");


$usuarioV = $_POST['Usuario'];
$contraseña = $_POST['Contraseña'];
$correo = $_POST['Correo'];

$consultaSQL = "INSERT INTO USUARIOS (id, Usuario, Contraseña, Correo) VALUES ('NULL','$usuarioV' , '$contraseña', '$correo')";   
$registros = mysqli_query($con,$consultaSQL) or die ("Problema en el INSERT");


$consulta = $con -> prepare($consultaSQL);
$consulta -> execute();

/*$result = mysqli_fetch_array($registros,MYSQLI_ASSOC);
echo json_encode($result);*/
?>

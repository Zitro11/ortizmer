<?php

$NombreV = $_POST['Nombre'];

$ApellidoV = $_POST['Apellidos'];

$servidor = "localhost";
$basededatos = "VIAJES";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die ("No se conecto");
$consulta = "select * from VUELO where Nombre='$NombreV' and Apellido='$ApellidoV'";   

$registros = mysqli_query($con,$consulta) or die ("Problema en el select");

$result = mysqli_fetch_array($registros,MYSQLI_ASSOC);
echo json_encode($result);
?>
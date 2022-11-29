<?php

$NombreV = $_POST['Nombre'];

$servidor = "localhost";
$basededatos = "VIAJES";
$usuario = "root";
$password = "root";

$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die ("No se conecto");
$consulta = "select * from VUELO WHERE Nombre=$NombreV";   

$registros = mysqli_query($con,$consulta) or die ("Problema en el select");

$result = mysqli_fetch_array($registros,MYSQLI_ASSOC);
echo json_encode($result);
?>

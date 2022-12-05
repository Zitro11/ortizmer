<?php

$servidor = "localhost";
$basededatos = "VIAJES";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die ("No se conecto");
$consulta = "SELECT * FROM VUELO";   

$registros = mysqli_query($con,$consulta) or die ("Problema en el select");

$result = mysqli_fetch_all($registros);
mysqli_close($con);
echo json_encode($result);
?>


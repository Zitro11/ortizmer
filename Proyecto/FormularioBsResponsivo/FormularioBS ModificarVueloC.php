<?php

$ID = $_POST['id_Consulta'];


$servidor = "localhost";
$basededatos = "VIAJES";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die ("No se conecto");
$consulta = "SELECT * FROM VUELO WHERE id=$ID";   

$registros = mysqli_query($con,$consulta) or die ("Problema en el select");

$result = mysqli_fetch_array($registros,MYSQLI_ASSOC);
echo json_encode($result);
?>
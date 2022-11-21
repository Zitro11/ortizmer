<?php

$id_empleado = $_POST['Id'];

$servidor = "localhost";
$basededatos = "ejemplo";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die ("No se conecto");
$consulta = "select * from empleado WHERE id_empleado=$id_empleado";   

$registros = mysqli_query($con,$consulta) or die ("Problema en el select");

$result = mysqli_fetch_array($registros,MYSQLI_ASSOC);
echo json_encode($result);
?>

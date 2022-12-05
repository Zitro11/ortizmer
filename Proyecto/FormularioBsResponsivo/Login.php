<?php

$servidor = "localhost";
$basededatos = "VIAJES";
$usuario = "root";
$password = "root";

$usuarioL = $_POST['Usuario'];

$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die ("No se conecto");

$consultaSQL = "SELECT Usuario FROM USUARIOS WHERE Usuario = $usuarioL";

$consulta = $con -> prepare($consultaSQL);
$consulta -> execute();


?>
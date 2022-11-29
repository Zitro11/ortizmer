<?php
$Id = $_POST['Id'];

$servidor = "localhost";
$basededatos = "ejemplo";
$usuario = "root";
$password = "root*";

$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die("no se pudo conectar a localhost");
$consulta = "select * from usuarios WHERE Id =$Id";

$registros = mysqli_query($con,$consulta) or die ("problemas en el select");

$result = mysqli_fetch_array($registros,MYSQLI_ASSOC);
mysqli_close($con);
echo json_encode($result);


?>
<?php

$servidor = "localhost";
$basededatos = "ejemplo";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die ("No se conecto");
$consulta = "select * from empleado";   

$registros = mysqli_query($con,$consulta) or die ("Problema en el select");


/*
//resultado array asociativo
while($reg = mysqli_fetch_array($registros,MYSQLIASSOC)){
    printf($reg['nombre'], ' '.$reg['apPaterno'].'<br>');
}

//Rsultado como array numerico
while($reg = mysqli_fetch_array($registros,MYSQLI_NUM)) {
    printf($reg[1].' '.$reg.'<br>');
}
*/

//OBTIENE TODOS LOS REGISTROS DE LA CONSULTA CON UNA MATRIZ
$result = mysqli_fetch_all($registros);
var_dump($result);

mysqli_close($con);
echo json_encode($result);

//DBeaver//
?>
<?php
$registro["Nombre"]= "Francisco";
$registro["Apellido"] = "Ortiz";
$registro["Correo"] = "L19100@gmail.com";
$registro["Genero"] = "Hombre";
$registro["Telefono"] = "867 111 22 33";
$registro["Nacimiento"] = "01/01/2001";
$registro["Origen"] = "Nuevo Laredo";
$registro["Destino"] = "Monterrey";
$registro["Aero"] = "Aeromexico";
$registro["Pasajeros"] = "1";
$registro["Ida"] = "17/11/2022";
$registro["Vuelta"] = "18/11/2022";
echo json_encode($registro);
?>
<?php
$registro["Nombre"]= "Francisco";
$registro["Apellido"] = "Ortiz";
$registro["Correo"] = "L19100@gmail.com";
$registro["Genero"] = "Hombre";
$registro["Telefono"] = "867 111 22 33";
$registro["Fecha"] = "2001-01-01";
$registro["Origen"] = "Nuevo Laredo";
$registro["Destino"] = "Monterrey";
$registro["Aerolinea"] = "Aeromexico";
$registro["Pasajeros"] = "1";
$registro["Ida"] = "2022-11-17";
$registro["Vuelta"] = "2022-11-18";
echo json_encode($registro);
?>
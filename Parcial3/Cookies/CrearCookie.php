<?php
$fechaHoy           = date('Y/m/d H:i:s');
$siguienteSemana    = time() + (7 * 24 * 60 * 60);
$fechaExpira        = date('Y/m/d H:i:s', $siguienteSemana). "<BR>";

echo '<b>Fecha de Creacion de cookie: </b>'.$fechaHoy.'<br>';
echo '<b>Fecha de vencimiento de cookie: </b>'.$fechaExpira.'<br>';

setcookie("ultimaVisita",$fechaHoy,time() + (7 * 24 * 60 * 60));

?>
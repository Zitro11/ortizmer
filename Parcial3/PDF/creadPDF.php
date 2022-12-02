<?php
$nombre = $_POST['Nombre'];

require('C:/wamp64/www/ortizmer/Parcial3/PDF/FPDF/fpdf.php');

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->Cell(40,10,'¡Hola, Mundo!' .$nombre);
$pdf->Output();
?>
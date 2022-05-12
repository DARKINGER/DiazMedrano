<?php

$registro['Nombre']  ='Alejandro';
$registro['PrimerApellido'] ='Diaz';
$registro['SegundoApellido'] ='Med';
$registro['Direccion'] ='Monterrey 801';
$registro['Telefono'] ='867 123 456';
$registro['Ciudad']     ='Nuevo Laredo';
$registro['estado']     ='Tamaulipas';

$registro['RF'] ='DIMA001928';
$registro['RazonSocial'] ='juridica';
$registro['TipoDoc'] ='factura';
$registro['Ingreso'] ='$800';
$registro['Egreso'] ='$750';

$registroJson = json_encode($registro);
echo $registroJson;

?>
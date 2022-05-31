<?php

require_once("conexion.php");



$nombre = $_POST['Nombre'];
$apellido = $_POST['1Apellido'];
$apellido2 = $_POST['2Apellido'];
$dir = $_POST['dirClientes'];
$tel = $_POST['telClientes'];
$ciudad = $_POST['Ciudadcliente'];
$estado = $_POST['EstadoCliente'];
$RFC = $_POST['RFC'];
$Razon = $_POST['Razon'];
$tipo = $_POST['Tipo'];
$ingreso = $_POST['Ingreso'];
$Egreso = $_POST['Egreso'];


$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
//DIMA1991
try {
$consultaSql = "UPDATE persona SET nombre='$nombre',PrimerApellido='$apellido', SegundoApellido='$apellido2', Direccion='$dir',
Telefono=$tel, ciudad='$ciudad', Estado='$estado', RazonSocial='$Razon', TipoDocumento='$tipo',
IngresoMensual=$ingreso, EgresoMensual=$Egreso WHERE RFC='$RFC' ";
//echo $consultaSql;
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
//$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
$consulta->closeCursor();

echo json_encode('se actualizo bien la base de datos');

} catch(PDOException $e) {
    echo "Error de actualizar en la base de datos";
    echo $e->getMessage();
}

//echo json_encode($resultado);



?>
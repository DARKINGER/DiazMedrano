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

if ($nombre === '' || $apellido === '' /*|| $apellido2 === ''*/ || $dir  === '' || $tel === '' || $ciudad === '' || $estado === '' ||
$RFC === '' || $Razon === '' || $tipo === '' || $ingreso === '' || $Egreso === ''){
    echo json_encode('Favor de llenar datos');
}else{

    //DIMA1991

    try {
        /*
        $consultaSql = "Inserte into persona values ('".$nombre."','"."'".$apellido."','"."'".$apellido2."','"."'".$dir."','".
        "'".$tel."','"."'".$ciudad."','"."'".$estado."','"."'".$RFC."','"."'".$Razon."','"."'".$tipo."','"."'".$ingreso."','"
        ."'".$Egreso."')";
        */
        
        $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        
        /*
        $consultaSql = $con->prepare("insert into persona values(:nom, :apellido1, :apellido2, :dir, :tel, 
        :ciudad, :estado, :rfc, :razon, :tipo, ingreso, :egreso)");
        $consultaSql->bindParm(':nom', $nombre, PDO::PARAM_STR);
        $consultaSql->bindParm(':apellido1', $apellido, PDO::PARAM_STR);
        $consultaSql->bindParm(':apellido2', $apellido2, PDO::PARAM_STR);
        $consultaSql->bindParm(':dir', $dir, PDO::PARAM_STR);
        $consultaSql->bindParm(':tel', $tel, PDO::PARAM_INT);
        $consultaSql->bindParm(':ciudad', $ciudad, PDO::PARAM_STR);
        $consultaSql->bindParm(':estado', $estado, PDO::PARAM_STR);
        $consultaSql->bindParm(':rfc', $RFC, PDO::PARAM_STR);
        $consultaSql->bindParm(':razon', $Razon, PDO::PARAM_STR);
        $consultaSql->bindParm(':tipo', $tipo, PDO::PARAM_STR);
        $consultaSql->bindParm(':ingreso', $ingreso, PDO::PARAM_INT);
        $consultaSql->bindParm(':egreso', $Egreso, PDO::PARAM_INT);
        */
        $cadena = "INSERT INTO persona VALUES ('$nombre', '$apellido', '$apellido2', 
        '$dir', '$tel', '$ciudad', '$estado', '$RFC', '$Razon', '$tipo', '$ingreso', '$Egreso') ";

        $consultaSql = $con->prepare($cadena);


        //echo $consultaSql;
       //$consulta = $con -> prepare($consultaSql);
        if($consultaSql -> execute()){
            echo json_encode('Datos almacenados en la BD correctamente');    
            //echo 'Datos almacenados en la BD correctamente';
        }else{
            echo json_encode("No se almacenaron los datos");
        }
        //$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
        $consultaSql->closeCursor();
        //$consultaSql->close();

    } catch(PDOException $e) {
        echo json_encode("Error al agregar a la base de datos");
        echo $e->getMessage();
    }


    //echo json_encode('Correctamaente enviados a la BD');    
}


?>
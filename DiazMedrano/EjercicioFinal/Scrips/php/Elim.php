<?php

$Rfc=$_POST['RFC3'];
require_once("conexion.php");

    //DIMA1991

    try {
        $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        //DIMA1991
        $consultaSql = "DELETE FROM persona WHERE RFC='".$Rfc."'";
        //echo $consultaSql;
        $consulta = $con -> prepare($consultaSql);
        $consulta -> execute();
        //$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
        $consulta->closeCursor();
        echo "Se a eliminado de la base de datos";

} catch(PDOException $e) {
    echo "Error al eliminar en la base de datos";
    echo $e->getMessage();
}

//echo'se elimino el registro de la base de datos';
//echo json_encode($resultado);



?>
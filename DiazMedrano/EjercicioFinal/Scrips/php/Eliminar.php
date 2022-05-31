<?php

$Rfc=$_POST['RFC3'];
require_once("conexion.php");

    //DIMA1991

    try {
        
        $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        
        $cadena = "delete from persona where RFC = '".$Rfc."'";

        $consultaSql = $con->prepare($cadena);

        if($consultaSql -> execute()){
           echo "Datos eliminados de la BD correctamente";
        }else{
            echo "No se eliminaron los datos";
        }
        //$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
        $consultaSql->closeCursor();
        //$consultaSql->close();

    } catch(PDOException $e) {
        echo "Error al eliminar en la base de datos";
        echo $e->getMessage();
    }



?>
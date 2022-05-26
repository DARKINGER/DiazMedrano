<?php

//$Rfc=$_POST['RFC1'];
$Rfc='DIMA1991';

$hostname='localhost';
$database='nocontrol_1910068';
$username='root';
$password='1020';
$port='3306';
//DIMA1991   phprootusuario
/*
try {
    
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);

} catch (PDOException $th) {
    
    echo "Error de conexion";
    echo $th -> getMessage();
    exit();
}
*/

//$conectando = "mysql:hos=".$this->hostname."dbname=".$this->database."charset=utf8";
try {
   // $this->con = new PDO($conectando,$this->$username,$this->$password);
   // $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $con = mysqli_connect('localhost', 'root', '1020', 'nocontrol_1910068') or die('Error en conexion al Servidor');
    mysqli_set_charset($con, "utf8");
    //echo 'conexion exitosa';
} catch(PDOException $e) {
    //$this->con = 'Error de conexion';
    echo "Error de conexion a la base de datos";
    echo "Error: ".$e->getMessage();
    exit();
}



try {
    $consultaSql = "select * from persona where RFC=".$Rfc;
    //$consulta = $con -> prepare($consultaSql);
    $resultado = mysqli_query($con, $consultaSql);

    $resultado->mysqli_query()
    
    //$consulta -> execute();
    //$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    //$consulta->closeCursor();
    
    } catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();
    }
    
    echo json_encode($resultado);
    
?>
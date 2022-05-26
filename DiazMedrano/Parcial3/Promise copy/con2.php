<?php

//$iduser=$_POST['par1'];
$Rfc=$_POST['RFC'];
//$Rfc='Diaz';

$hostname='localhost';
$database='nocontrol_1910068';
$username='root';
$password='1020';
$port='3306';
//echo $Rfc;

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
} catch(PDOException $e) {
    echo "Error de conexion a la base de datos";
    echo $e->getMessage();
    exit();
}

$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
//DIMA1991
try {
$consultaSql = "select * from persona where RFC = '".$Rfc."'";
//echo $consultaSql;
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
$consulta->closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

//echo'se genero bien la consulta';
echo json_encode($resultado);
?>

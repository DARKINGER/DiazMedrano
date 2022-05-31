<?php   

$hostname='localhost';
$database='nocontrol_19100168';
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

?>
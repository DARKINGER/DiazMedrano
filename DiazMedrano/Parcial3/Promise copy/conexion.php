<?php
//$iduser=$_POST['par1'];
$Rfc='DIMA1991';


 $hostname='localhost';
 $database='nocontrol_1910068';
 $username='root';
 $password='1020';
 $port='3306';
 $conect;

    
    $conectando = "mysql:hos=".$this->hostname."dbname=".$this->database."charset=utf8";
    try {
        conect = new PDO($conectando,$username,$password);
        conect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    $this->conect = 'Error de conexion';
    echo "Error de conexion a la base de datos";
    echo "Error: ".$e->getMessage();
    exit();
}





//$con = new conexion();
try {
    $consultaSql = "select * from persona where RFC=MARIN213";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();
    
    } catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();
    }
    
echo json_encode($resultado);


    

//echo json_encode($resultado);
?>

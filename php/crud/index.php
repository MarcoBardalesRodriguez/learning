<?php

define("DB_HOST","localhost");
define("DB_USER","root");
define("DB_PASS","root");
define("DB_NAME","peliculas");

$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if($conn->connect_error){
    die("conexion fallida".$conn->connect_error);
}else {
    echo '<p>conexion exitosa</p>';
}

$result = $conn->query("SELECT * FROM pelicula");

if ($result) {
    // print_r($result);
    while($row = $result->fetch_assoc()){
        echo "<p>" . $row['nombre'] . "</p>";
    }
}

$conn->close();

?>
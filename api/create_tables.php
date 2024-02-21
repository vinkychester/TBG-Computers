<?php

require_once("core/Database.php");

$statements = [
    'CREATE TABLE IF NOT EXISTS users( 
        id INT AUTO_INCREMENT,
        full_name  VARCHAR(120) NOT NULL, 
        contact VARCHAR(50) NULL, 
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY(id)
    );',
    'CREATE TABLE IF NOT EXISTS files( 
        id INT AUTO_INCREMENT,
        file_name VARCHAR(200) NOT NULL, 
        file_path VARCHAR(50) NULL, 
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY(id)
    );'
];

$database = new Database();
$connection = $database->connection;

foreach ($statements as $statement) {
    $connection->exec($statement);
}

$connection = null;
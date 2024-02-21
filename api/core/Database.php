<?php

class Database
{
    public ?PDO $connection;

    public function __construct()
    {
        $this->connection = null;
        $env = parse_ini_file('.env');

        try {
            $this->connection = new PDO("mysql:host=" . $env["HOST"] . ";dbname=" . $env["DB_NAME"], $env["USER"], $env["PASSWORD"]);
            $this->connection->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Cannot connect to database: " . $exception->getMessage();
        }

        return $this->connection;
    }
}

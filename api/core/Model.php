<?php

class Model
{
    public ?PDO $connection = null;

    public function __construct()
    {
        $database = new Database();
        $this->connection = $database->connection;
    }

    public function readOneData($table, $id)
    {
        $stmt = $this->connection->prepare("SELECT * FROM `{$table}` WHERE id=:id");
        $stmt->execute(['id' => $id]);
        return $stmt->fetch();
    }

    public function readData($table): false|array
    {
        $statement = $this->connection->query("SELECT * FROM `{$table}`");
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteData($table, $id): void
    {
        $stmt= $this->connection->prepare("DELETE FROM `{$table}` WHERE id=?");
        $stmt->execute([$id]);
    }
}
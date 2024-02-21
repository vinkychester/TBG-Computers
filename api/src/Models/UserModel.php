<?php

namespace Models;

require $_SERVER['DOCUMENT_ROOT'] . '/core/Model.php';

class UserModel extends \Model
{
    private ?string $table = "users";

    public function create(?string $fullName, ?string $contact): void
    {
        $sql = "INSERT INTO `{$this->table}` (full_name, contact) VALUES (:full_name, :contact)";
        $stmt = $this->connection->prepare($sql);

        $stmt->bindValue(":full_name", $fullName);
        $stmt->bindValue(":contact", $contact);

        $stmt->execute();
    }

    public function getAll(): false|array
    {
        return $this->readData($this->table);
    }

    public function getById($id)
    {
        return $this->readOneData($this->table, $id);
    }

    public function update($id, ?string $fullName, ?string $contact,): void
    {
        $stmt = $this->connection->prepare("UPDATE `{$this->table}` SET full_name=:full_name, contact=:contact WHERE id=:id");

        $stmt->bindValue(":full_name", $fullName);
        $stmt->bindValue(":contact", $contact);
        $stmt->bindValue(":id", $id);

        $stmt->execute();
    }
}
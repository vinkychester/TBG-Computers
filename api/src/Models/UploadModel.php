<?php

namespace Models;

class UploadModel extends \Model
{
    private ?string $table = "files";

    public function create(?string $fileName, ?string $filePath): void
    {
        $sql = "INSERT INTO `{$this->table}` (file_name, file_path) VALUES (:file_name, :file_path)";
        $stmt = $this->connection->prepare($sql);

        $stmt->bindValue(":file_name", $fileName);
        $stmt->bindValue(":file_path", $filePath);

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

    public function delete($id): void
    {
        $this->deleteData($this->table, $id);
    }
}
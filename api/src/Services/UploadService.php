<?php

namespace Services;

use FilesystemIterator;
use Random\RandomException;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

class UploadService
{
    private ?string $targetDir = "static/";

    /**
     * @throws RandomException
     */
    private function generateRandomPath(int $length = 1): string
    {
        return bin2hex(random_bytes($length));
    }

    /**
     * @param string $directory
     */
    public function createDirectory(string $directory): void
    {
        if (!file_exists($directory)) {
            mkdir($directory, 0777, true);
        }
    }

    /**
     * @param string $directory
     */
    public function delete(string $directory): void
    {
        $it = new RecursiveDirectoryIterator($directory, FilesystemIterator::SKIP_DOTS);
        $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);

        foreach ($files as $file) {
            if ($file->isDir()) {
                rmdir($file->getRealPath());
            } else {
                unlink($file->getRealPath());
            }
        }

        rmdir($directory);
    }

    /**
     * @throws RandomException
     * @throws \Exception
     */
    public function upload($file): array
    {
        $fileName = $file["name"];
        $newDirectoryName = $this->generateRandomPath(8);
        $newDirectory = $this->targetDir . $newDirectoryName;

        $this->createDirectory($newDirectory);

        $targetFile = $newDirectory . DIRECTORY_SEPARATOR . $fileName;
        $fileType = pathinfo($targetFile, PATHINFO_EXTENSION);

        if ($fileType != "pdf") {
            throw new \Exception(" Oly PDF files are allowed");
        }

        move_uploaded_file($file["tmp_name"], $targetFile);

        return [$fileName, $newDirectory];
    }
}
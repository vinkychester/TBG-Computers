<?php

namespace Controllers;

use Exception;
use Models\UploadModel;
use Models\UserModel;
use Services\NotificationProviderService;
use Services\UploadService;

class UploadController
{
    private UploadModel $model;

    public function __construct()
    {
        $this->model = new UploadModel();
    }

    // Route: /api/upload/create
    public function createAction(): void
    {
        if ($_FILES) {
            foreach ($_FILES as $file) {
                $uploadService = new UploadService();

                try {
                    list($fileName, $filePath) = $uploadService->upload($file);

                    try {
                        $this->model->create($fileName, $filePath);
                    } catch (Exception $exception) {
                        echo json_encode("Error saving file to database: " . $exception);
                    }
                } catch (Exception $exception) {
                    echo json_encode("Error uploading file: " . $exception);
                }
            }
            echo json_encode("Files uploaded to server and saved to database");
        }
    }

    /**
     * @throws Exception
     */
    // Route: /api/upload/get - id - integer
    public function getAction($id): void
    {
        try {
            $file = $this->model->getById($id);
            echo json_encode($file);
        } catch (Exception $exception) {
            throw new Exception($exception);
        }
    }

    /**
     * @throws Exception
     */
    // Route: /api/upload/get-all
    public function getAllAction()
    {
        try {
            $files = $this->model->getAll();
            echo json_encode($files);
        } catch (Exception $exception) {
            throw new Exception($exception);
        }
    }

    /**
     * Sends file by id to all contacts in database
     * @param $id
     * @return void
     * @throws Exception
     */
    // Route: /api/upload/send/{id} - id - integer
    public function sendAction($id): void
    {
        try {
            $file = $this->model->getById($id);

            if ($file) {
                $filePath = $_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR . $file["file_path"] . DIRECTORY_SEPARATOR . $file["file_name"];

                if (file_exists($filePath)) {
                    $userModel = new UserModel();
                    $users = $userModel->getAll();

                    try {
                        foreach ($users as $user) {
                            $contact = $user["contact"];
                            $providerService = new NotificationProviderService();
                            $providerService->getNotificationService($contact)->sendFile($contact, $filePath);
                        }
                    } catch (Exception $exception) {
                        throw new Exception("Error to send file: " . $exception);
                    }

                    // delete file
                    $uploadService = new UploadService();
                    $uploadService->delete($file["file_path"]);

                    // delete from database
                    try {
                        $this->model->delete($id);
                    } catch (Exception $exception) {
                        throw new Exception("Error to delete file: " . $exception);
                    }

                } else {
                    throw new Exception("File not found");
                }

            } else {
                throw new Exception("File not found");
            }
        } catch (Exception $exception) {
            throw new Exception($exception);
        }
    }
}
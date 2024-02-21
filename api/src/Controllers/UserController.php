<?php

namespace Controllers;

use Exception;
use Models\UserModel;

class UserController
{
    private UserModel $model;

    public function __construct()
    {
        $this->model = new UserModel();
    }

    /**
     * @throws Exception
     */
    public function createAction(): void
    {
        $data = json_decode(file_get_contents('php://input'), true);

        if ($data) {
            $userModel = new UserModel();

            try {
                $userModel->create($data["fullName"], $data["contact"]);
                echo json_encode("User created");
            } catch (Exception $exception) {
                throw new Exception($exception);
            }
        } else {
            echo json_encode("No data provided");
        }
    }

    /**
     * @throws Exception
     */
    // Route: /api/user/get/{id}
    public function getAction($id): void
    {
        try {
            $user = $this->model->getById($id);
            echo json_encode($user, JSON_UNESCAPED_UNICODE);
        } catch (Exception $exception) {
            throw new Exception($exception);
        }
    }

    /**
     * @throws Exception
     */
    // Route: /api/user/get-all
    public function getAllAction(): void
    {
        try {
            $users = $this->model->getAll();
            echo json_encode($users, JSON_UNESCAPED_UNICODE);
        } catch (Exception $exception) {
            throw new Exception($exception);
        }
    }

    /**
     * @throws Exception
     */
    // Route: /api/user/update/{id}
    public function updateAction($id): void
    {
        $data = json_decode(file_get_contents('php://input'), true);

        try {
            $this->model->update($id, $data["fullName"], $data["contact"]);
            echo "User updated successfully";
        } catch (Exception $exception) {
            throw new Exception($exception);
        }
    }
}
<?php

spl_autoload_register(function (string $class) {
    $path = ["/inc/", "/src/", "/core/"];

    foreach ($path as $route) {
        if ($route === "/src/") {
            $dirs = array_diff(scandir($_SERVER['DOCUMENT_ROOT'] . $route), array('.', '..'));

            foreach ($dirs as $dir) {
                $files = glob($_SERVER['DOCUMENT_ROOT'] . $route . $dir . '/*.php');

                foreach ($files as $file) {
                    if (is_file($file))
                        require_once($file);
                }
            }

        } else {
            $route = $_SERVER['DOCUMENT_ROOT'] . $route . $class . '.php';

            if (is_file($route)) {
                require_once($route);
            }
        }
    }
});
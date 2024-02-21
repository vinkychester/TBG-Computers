<?php

class Route
{
    private ?string $controllerName = "Controllers\MainController";
    private ?string $methodName = "mainAction";

    /**
     * @throws Exception
     */
    public function run(): void
    {
        $url = $_SERVER["REQUEST_URI"];
        if (!empty($url) && $url !== "/api") {

            $url = rtrim($url, '/');
            $url = explode('/', $url);
            $url = array_filter($url, fn($value) => !is_null($value) && $value !== '' && $value !== 'api');

            $this->controllerName = "Controllers\\" . ucfirst(array_shift($url)) . 'Controller';
            $method = array_shift($url);

            if (str_contains($method, "-")) {
                $arr = explode("-", $method);
                $method = $arr[0] . ucfirst($arr[1]);
            }

            $this->methodName = $method . 'Action';

            $options = $url;
        }

        if (class_exists($this->controllerName)) {
            $controller = new $this->controllerName;

            if (method_exists($controller, $this->methodName)) {
                $method = $this->methodName;
                if (isset($options)){
                    call_user_func_array(array($controller, $method), $options);
                }
                else {
                    $controller->$method();
                }
            } else {
                throw new Exception("Method not found");
            }
        } else {
            throw new Exception("Controller not found");
        }
    }
}
<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

// Displaying errors
ini_set('display_errors', 1);
error_reporting(E_ALL);
session_start();

// autoload dirs
require_once('inc/autoload.php');

$route = new Route();
$route->run();



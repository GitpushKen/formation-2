<?php 

session_start();

try{
    $db = new PDO('mysql:host=localhost;dbname=ndshop', "root", "");
} catch(PDOException $e) {
    throw $e;
}

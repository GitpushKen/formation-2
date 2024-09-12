<?php 

session_start();

try{
    $db = new PDO('mysql:host=127.0.0.1;dbname=shopatypical', "root", "");
} catch(PDOException $e) {
    throw $e;
}

<?php 

session_start();

try{
    $db = new PDO('mysql:host=localhost;dbname=shopatypical', "root", "");
} catch(PDOException $e) {
    throw $e;
}

<?php 
try{
    $db = new PDO('mysql:host=localhost;dbname=ndshop', "root", "");
} catch(PDOException $e) {
    throw $e;
}

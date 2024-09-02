<?php
    $DB_NAME = "Articles";
    $DB_USER = "root";
    $DB_PASS = "";

    $bdd = new PDO('mysql:host=localhost;dbname=' . $DB_NAME, $DB_USER, $DB_PASS, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
?>
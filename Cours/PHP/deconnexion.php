<?php
    include_once('./connect.php');

    session_destroy();
    header('Location: connexion.php');
?>
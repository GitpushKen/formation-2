<?php
    session_start();
    include_once('../models/connect.php');

    session_destroy();
    header('Location: ../index.php');
?>
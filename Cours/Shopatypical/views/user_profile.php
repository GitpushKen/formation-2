<?php
session_start();
include('../models/connect.php');
include('../models/_classes.php');

$utilisateurs = $utilisateur->select();

?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/style.css">
    <title>Ajout utilisateur</title>

</head>

<body>
<div class="background">
        <img id="right" src="../assets/imgs/desktop_bg/right.svg" alt="right">
        <img id="full-left" src="../assets/imgs/desktop_bg/full_left.svg" alt="full-left">
        <img id="top-left" src="../assets/imgs/desktop_bg/top_left.svg" alt="top-left">
    </div>
    <header>
        <a class="logo" href="../index.php">
        <img src="../assets/imgs/logo.svg" alt="logo">
        </a>
        

        <div class="profile">
        <?php 
            if(!empty($_SESSION['username'])) {
                ?> 
                <a href="#">
                <img src="../assets/imgs/profile-connected.png" alt="profile-icon">
                </a>
                <div class="cheering">
                <a class="cheer" href="../connexion/deconnexion.php">Se déconnecter</a>

                </div>
            <?php } ?>

            <!-- <a class="cheer" href="./connexion/deconnexion.php">Se déconnecter</a> -->
        </div>
    </header>

</body>

</html>
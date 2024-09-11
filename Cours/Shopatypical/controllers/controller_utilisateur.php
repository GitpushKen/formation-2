<?php 
include('../models/connect.php');
include('../models/_classes.php');
   
if(!empty($_POST['form_inscription'])) {
    $utilisateur->insert($_POST['form_nom'], $_POST['form_prenom'], $_POST['form_pseudo'], $_POST['form_mdp']);
    header("Location: ../index.php");
}

?>
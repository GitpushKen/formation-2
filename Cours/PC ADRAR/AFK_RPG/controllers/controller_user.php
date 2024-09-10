<?php 
    include("../models/connect.php");
    include("../views/view_article.php");

    if(isset($_POST['nom_article']) && isset($_POST['contenu_article'])) {
        $nom = $_POST['nom_article'];
        $contenu = $_POST['contenu_article'];

        include("../models/model_article.php");
    } else {
        echo "Veuillez remplir les champs necessaires";
    }
?>
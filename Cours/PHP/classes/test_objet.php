<?php 
    include("./Maison.php");
    include("./Vehicule.php");
    include("./Utilisateur.php");

    $maison = new Maison(); 
    $maison->nomMaison = "maison";
    $maison->longueurMaison = 12;
    $maison->largeurMaison = 8;
    $maison->nbrEtages = 2;

    $maison->surface();

    $vehicule = new Vehicule();
    $vehicule->nomVehicule = "Mercedes";
    $vehicule->nbRoues = 4;
    $vehicule->setVitesse(250);
    $vehicule->detect();

    $vehicule2 = new Vehicule();
    $vehicule2->nomVehicule = "Honda";
    $vehicule2->nbRoues = 2;
    $vehicule2->setVitesse(280);
    $vehicule2->detect();

    $vehicule->plusRapide($vehicule2);

    $utilisateur = new Utilisateur(1, "Caim", "The voiceless Soldier");
    echo($utilisateur->getName() . "<br>");

    $utilisateur2 = new Utilisateur(2, "Angelus", "The red Dragon");
    echo($utilisateur2->getName() . "<br>");

    $utilisateur3 = new Utilisateur(3, "Verdelet", "The old monk");
    echo($utilisateur3->getName() . "<br>");

?>
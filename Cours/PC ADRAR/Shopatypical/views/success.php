<?php
include('../models/connect.php');
include('../models/_classes.php');

$roles = $db->query("SELECT * FROM roles;")->fetchAll(PDO::FETCH_ASSOC);
$utilisateurs = $utilisateur->select();

?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajout utilisateur</title>
</head>

<body>
    <p>ggwp</p>
    <p><a href="../connexion/deconnexion.php">Se déconnecter</a></p>
</body>

</html>
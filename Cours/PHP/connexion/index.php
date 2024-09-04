<?php
    include_once('./connect.php');

    if(empty($_SESSION['user'])) {
        session_destroy();
        header('Location: connexion.php');
    }
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NDS</title>
</head>
<body>
   <H1>NDSHOP</H1>
   <p><a href="./deconnexion.php">Se déconnecter</a></p>
</body>
</html>
<?php 
    include("../models/connect.php");
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    foreach($articles as $article) { ?>
        <p>Numéro de l'article : <?=$article['id_article']; ?></p><br>
        <p>Nom de l'article : <?=$article['nom_article']; ?></p><br>
        <p>Contenu de l'article : <?=$article['contenu_article']?></p><br><br>
    <?php } ?>
</body>
</html>
<?php
    $DB_NAME = "Articles";
    $DB_USER = "root";
    $DB_PASS = "";

    $bdd = new PDO('mysql:host=localhost;dbname=' . $DB_NAME, $DB_USER, $DB_PASS, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    $articles = $bdd->query('SELECT * FROM article;')->fetchAll();
?>

<html lang="en">
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
?>

</body>
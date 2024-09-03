
<h1>ExoBDD</h1>

<?php
    $DB_NAME = "Articles";
    $DB_USER = "root";
    $DB_PASS = "";

    $bdd = new PDO('mysql:host=localhost;dbname=' . $DB_NAME, $DB_USER, $DB_PASS, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    $articles = $bdd->query('SELECT * FROM article;')->fetchAll();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="resultat.php" method="post">
    <h2>Titre de l'article</h2>
    <input type="text" name="nom_article">
    <h2>Contenu de l'article</h2>
    <input type="text" name="contenu_article">
    <button type="submit">Ajouter</button>
</form>

<?php
    foreach($articles as $article) { ?>
        <h2><?php echo $article['nom_article']; ?></h2>
        <h2><?=$article['contenu_article']?></h2>
    <?php } ?>
?>

</body>
</html>

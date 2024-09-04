
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajouter un article</title>
</head>
<body>
    <form action="../controllers/controller_article.php" method="post">
        <p>Saisir le nom de l'article: </p>
        <input type="text" name="nom_article" id="nom_article" />
        <p>Saisir le contenu de l'article: </p>
        <input type="text" name="contenu_article" id="contenu_article" />
        <input type="submit" value="Ajouter" />
    </form>
?>
</body>
</html>
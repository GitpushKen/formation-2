<?php
    $routing = array(
        "article" => "./views/view_article.php"
    );
    if(!empty($routing[@$_GET["page"]])) {
        $page = $routing[$_GET["page"]];
    } else {
        $page = "./views/errors/error_404.php";
    }

    include($page);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des articles</title>
</head>
<body>

</body>
</html>
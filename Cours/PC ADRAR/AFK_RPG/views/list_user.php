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
    foreach($users as $user) { ?>
        <p>Pseudo : <?=$article['pseudo_user']; ?></p><br>
        <p>Niveau : <?=$article['lvl_user']; ?></p><br><br>
    <?php } ?>
</body>
</html>
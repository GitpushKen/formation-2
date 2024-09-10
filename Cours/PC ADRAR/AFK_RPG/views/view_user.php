

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
</head>
<body>
   <H1>AFK_RPG</H1>
   <h2>S'inscrire</h2>
   <form action="../controllers/controller_user.php" method="post">
        <label for="form_email">E-Mail: </label>
        <input type="text" name="form_email" id="form_email" placeholder="Ex: prenom.nom@fournisseur.com">
        <label for="form_password">Mot de passe: </label>
        <input type="password" name="form_password" id="form_password" placeholder="Ex: 0000 ">
        <input type="submit" value="Envoyer">
   </form>
</body>
</html>
<?php
    include_once('./connect.php');

    if(!empty($_POST['form_connexion'])) {
        $select = $bdd->prepare('SELECT * FROM users WHERE email_user=:email_user;');
        $select->bindParam(':email_user', $_POST['form_email']);
        $select->execute();
        if($select->rowCount() === 1) {
            $user = $select->fetch(PDO::FETCH_ASSOC);
            if(password_verify($_POST['form_password'], $user['pass_user'])) {
                $_SESSION['user'] = $user;
                header('Location: index.php');
                echo ('<p>success</p>');
            }
        } else {
            unset($_SESSION['user']);
            echo ('<p>fail</p>');
        }
    }
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
</head>
<body>
   <H1>NDSHOP</H1>
   <h2>Se connecter</h2>
   <form method="post">
        <input type="hidden" name="form_connexion" value="1">
        <label for="form_email">E-Mail: </label>
        <input type="text" name="form_email" id="form_email" placeholder="Ex: prenom.nom@fournisseur.com">
        <label for="form_password">Mot de passe: </label>
        <input type="password" name="form_password" id="form_password" placeholder="Ex: 0000 ">
        <input type="submit" value="Se connecter">
   </form>
</body>
</html>
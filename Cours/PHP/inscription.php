<?php
    include_once('./connect.php');

    if(!empty($_POST['form_inscription'])) {
        $select = $bdd->prepare('SELECT email_user FROM users WHERE email_user=:email_user;');
        $select->bindParam(':email_user', $_POST['form_email']);
        $select->execute();
        if(empty($select->fetch(PDO::FETCH_COLUMN))) {
            $insert = $bdd->prepare('INSERT INTO users(email_user, pass_user) VALUES(:email_user, :pass_user);');
            $insert->bindParam(':email_user', $_POST['form_email']);
            $pass_user = password_hash($_POST['form_password'], PASSWORD_BCRYPT, array("cost" => 12));
            $insert->bindParam(':pass_user', $pass_user);
            if($insert->execute()) {
                die('<p>Inscription réussie</p><a href="./connexion.php">Se connecter.</a>');
            } else {
                ('<p>Echec</p><a href="./inscription.php">Réessayer.</a>');   
            }
        } 
        die('<p>Deja prit</p><a href="./inscription.php">Réessayer.</a>');   
    }
    
        
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
</head>
<body>
   <H1>NDSHOP</H1>
   <h2>S'inscrire</h2>
   <form method="post">
        <input type="hidden" name="form_inscription" value="1">
        <label for="form_email">E-Mail: </label>
        <input type="text" name="form_email" id="form_email" placeholder="Ex: prenom.nom@fournisseur.com">
        <label for="form_password">Mot de passe: </label>
        <input type="password" name="form_password" id="form_password" placeholder="Ex: 0000 ">
        <input type="submit" value="Envoyer">
   </form>
</body>
</html>
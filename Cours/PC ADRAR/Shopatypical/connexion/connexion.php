<?php
    include_once('../models/connect.php');
    include('../models/_classes.php');


    // if(!empty($_POST['form_connexion'])) {
    //     $select = $db->prepare('SELECT * FROM utilisateurs WHERE utilisateur_pseudo=:utilisateur_pseudo;');
    //     $select->bindParam(':utilisateur_pseudo' /*OR 'utilisateur_mail'*/, $_POST['form_pseudo']);
    //     $select->execute();
    //     if($select->rowCount() === 1) {
    //         $user = $select->fetch(PDO::FETCH_ASSOC);
    //         if(password_verify($_POST['form_password'], $user['utilisateur_mdp'])) {
    //             $_SESSION['user'] = $user;
    //             echo ('<p>success</p>');
    //             header('Location: ../views/index.php');
    //         } 
    //     } else {
    //         unset($_SESSION['user']);
    //         echo ('<p>fail</p>');
    //         header('Location: ../views/index.php');
    //     }
    // }

    if(!empty($_POST['form_connexion'])) {
        $select = $utilisateur->select();
        var_dump($select);
        foreach ($select as $key => &$val) {
            if($val['utilisateur_mdp'] == $_POST['form_password'] && $val['utilisateur_pseudo'] == $_POST['form_pseudo']) {
                $_SESSION['user'] = $user;
                echo ('<p>success</p>');
                header('Location: ../views/success.php');
            } else {
                unset($_SESSION['user']);
                echo ('<p>fail</p>');
            }
        };
    }
    $utilisateurs = $utilisateur->select();


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
        <label for="form_pseudo">Pseudo: </label>
        <input type="text" name="form_pseudo" id="form_pseudo" placeholder="Ex: JohnD75">
        <label for="form_password">Mot de passe: </label>
        <input type="password" name="form_password" id="form_password" placeholder="Ex: 0000 ">
        <input type="submit" value="Se connecter">
   </form>
</body>
</html>
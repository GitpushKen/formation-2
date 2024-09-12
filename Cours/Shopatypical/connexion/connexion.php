<?php
    include('../models/connect.php');
    include_once('../models/_classes.php');


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
        foreach ($select as $key => &$val) {
            if($val['utilisateur_mdp'] == $_POST['form_password'] && $val['utilisateur_pseudo'] == $_POST['form_pseudo']) {

                $_SESSION['username'] = $val['utilisateur_prenom'];
                header('Location: ../index.php');
            } else {
                    echo ('<p>fail</p>');
                }
        };
    }

?>

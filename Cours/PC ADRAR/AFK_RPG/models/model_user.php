<?php 
    try {
        $req = $bdd->prepare('INSERT INTO user(id_user, pseudo_user, lvl_user) VALUES(:id, :pseudo, :lvl)');
        $req->bindParam(':id', $id);
        $req->bindParam(':pseudo', $pseudo);
        $req->bindParam(':lvl', $lvl);
        $req->execute();
        //echo "Ajout de l'user : $nom qui a comme contenu : $contenu";
        header("location: ../views/list_user.php");
    } catch(Exception $e) {
        die("Erreur: " . $e->getMessage());
    }
?>
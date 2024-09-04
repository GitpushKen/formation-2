<?php 
    try {
        $req = $bdd->prepare('INSERT INTO article(id_article, nom_article, contenu_article) VALUES(:id, :nom, :contenu)');
        $req->bindParam(':id', $id);
        $req->bindParam(':nom', $nom);
        $req->bindParam(':contenu', $contenu);
        $req->execute();
        //echo "Ajout de l'article : $nom qui a comme contenu : $contenu";
        header("location: ../views/list_article.php");
    } catch(Exception $e) {
        die("Erreur: " . $e->getMessage());
    }
?>
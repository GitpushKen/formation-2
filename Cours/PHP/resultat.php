
<?php
    $DB_NAME = "Articles";
    $DB_USER = "root";
    $DB_PASS = "";

    $bdd = new PDO('mysql:host=localhost;dbname=' . $DB_NAME, $DB_USER, $DB_PASS, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    if(isset($_POST['nom_article']) && isset($_POST['contenu_article'])) {
        $nom = $_POST['nom_article'];
        $contenu = $_POST['contenu_article'];

        //$bdd->query('INSERT INTO article(nom_article, contenu_article) VALUES("' . $nom . '", "' . $contenu . '")');

        $req = $bdd->prepare('INSERT INTO article(id_article, nom_article, contenu_article) VALUES(:id, :nom, :contenu)');
        $req->bindParam(':id', $id);
        $req->bindParam(':nom', $nom);
        $req->bindParam(':contenu', $contenu);
        $req->execute();
    }
?>
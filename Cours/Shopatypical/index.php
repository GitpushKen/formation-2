<?php


include_once('./models/connect.php');
include_once('./models/_classes.php');




$roles = $db->query("SELECT * FROM roles;")->fetchAll(PDO::FETCH_ASSOC);
$utilisateurs = $utilisateur->select();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopatypical</title>
    <link rel="stylesheet" href="./styles/style.css">
    <script src="./JS/script.js" defer ></script>
</head>
<body>
    <div class="background">
        <img id="right" src="./assets/imgs/desktop_bg/right.svg" alt="right">
        <img id="full-left" src="./assets/imgs/desktop_bg/full_left.svg" alt="full-left">
        <img id="top-left" src="./assets/imgs/desktop_bg/top_left.svg" alt="top-left">
    </div>
    <header>
        <div class="logo">
            <img src="./assets/imgs/logo.svg" alt="logo">
        </div>
        <?php 
            if(!empty($_SESSION['username'])) {
                ?> 
                <p>Bienvenue <?php echo $_SESSION['username']?></p>
                <a href="./connexion/deconnexion.php">Se déconnecter</a>
            <?php } ?>

        <div class="profile">
            <img src="./assets/imgs/profile.svg" alt="profile-icon">
        </div>
    </header>
    <main>
        <?php 
            if(empty($_SESSION['username'])) {
                ?>
                <div id="id-panel" class="panel active">
                    <h3>Identifiez vous</h3>
                    <div class="buttons">
                        <h4 id="connect">Se connecter</h4>
                        <h4 id="inscript">S'inscrire</h4>
                    </div>
                </div>
                <div id="connect-panel" class="panel">
                    <h3>Se connecter</h3>
                    <form action="./connexion/connexion.php" method="post">
                            <input type="hidden" name="form_connexion" value="1">
                            <label for="form_pseudo">Pseudo: </label>
                            <input type="text" name="form_pseudo" id="form_pseudo" placeholder="Ex: JohnD75">
                            <label for="form_password">Mot de passe: </label>
                            <input type="password" name="form_password" id="form_password" placeholder="Ex: 0000 ">
                            <input type="submit" value="Se connecter">
                    </form>
                </div>
                <div id="inscript-panel" class="panel">
                    <h3>S'inscrire</h3>
                    <form action="./controllers/controller_utilisateur.php" method="post">
                        <input type="hidden" name="form_inscription" value="1">
                        <label for="form_nom">Nom:</label>
                        <input type="text" name="form_nom">
                        <label for="form_prenom">Prénom:</label>
                        <input type="text" name="form_prenom">
                        <label for="form_pseudo">Pseudo:</label>
                        <input type="text" name="form_pseudo">
                        <label for="form_mdp">Mot de passe:</label>
                        <input type="password" name="form_mdp">
                        <select name="form_role">
                        <?php foreach ($roles as $role) { ?>
                            <option value="<?= $role['role_id'] ?>"><?= $role['role_libelle'] ?></option>
                        <?php } ?>
                        </select>
                        <input type="submit" value="Ajouter">
                    </form>
                </div>
            <?php } else {
                ?> 
                <div id="registered">
                    <div id="r-panel" class="panel">
                        <img src="./assets/imgs/icons/0.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/1.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/2.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/3.svg" alt="" class="icons">
                    </div>
                </div>
            <?php } ?>

    </main>
    <footer>

    </footer>


</body>
</html>
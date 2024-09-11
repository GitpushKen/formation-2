<?php


include_once('./models/connect.php');
include_once('./models/_classes.php');





$utilisateurs = $utilisateur->select();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopatypical</title>
    <link rel="stylesheet" href="./styles/style.css">

</head>
<body>
    <div class="background">
        <img id="right" src="./assets/imgs/desktop_bg/right.svg" alt="right">
        <img id="full-left" src="./assets/imgs/desktop_bg/full_left.svg" alt="full-left">
        <img id="top-left" src="./assets/imgs/desktop_bg/top_left.svg" alt="top-left">
    </div>
    <header>
        <a class="logo" href="./index.php">
        <img src="./assets/imgs/logo.svg" alt="logo">
        </a>
        

        <div class="profile">
            <?php 
            if(!empty($_SESSION['username'])) {
                ?> 
                <a href="./views/user_profile.php">
                <img src="./assets/imgs/profile.svg" alt="profile-icon">
                </a>
                <div class="cheering">
                <p class="cheer">Bienvenue <?php echo $_SESSION['username']?></p>

                </div>
            <?php } ?>
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
                        <input type="submit" value="Ajouter">
                    </form>
                </div>
            <?php } else {
                ?> 
                <div class="registered-session">
                <div id="registered">
                    <div id="r-bg" class="panel"></div>
                    <div id="icon_bar">
                        <img id="burger" src="./assets/imgs/icons/0.svg" alt="" class="icons persistent">
                        <img src="./assets/imgs/icons/1.svg" alt="" class="icons persistent">
                        <img src="./assets/imgs/icons/2.svg" alt="" class="icons persistent">
                        <img src="./assets/imgs/icons/3.svg" alt="" class="icons persistent">
                        <div class="separator"></div>
                        <div id="icon_plus">
                            <div id="bar_one" class="bar"></div>
                            <div id="bar_two" class="bar"></div>
                        </div>
                        <div id="more-icons">
                        <img src="./assets/imgs/icons/1.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/2.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/3.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/1.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/2.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/3.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/1.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/2.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/3.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/1.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/2.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/3.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/1.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/2.svg" alt="" class="icons">
                        <img src="./assets/imgs/icons/3.svg" alt="" class="icons">
                        </div>

                    </div>
                    <script src="./JS/toggler.js"></script>
                </div>
                <div class="maps">
                <iframe
                    width="505"
                    height="450"
                    style="border:0"
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=API_KEY
                        &q=Space+Needle,Seattle+WA">
                    </iframe>
                </div>
                </div>

            <?php } ?>

    </main>
    <footer>

    </footer>

    <script src="./JS/script.js" ></script>
</body>
</html>
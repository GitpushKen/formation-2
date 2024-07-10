// Le but de cet exercice est de simuler des combats entre des personnages
// Un personnage sera représenté par un nom, un nombre de points de vie, un nombre de points de mana, une force

// 1) Comment faire pour stocker toutes ces informations dans une seule variable ?
// Créer un array qui contiendra toutes les données
// 2) Créer une variable firstPlayer et stocker dedans le personnage "Nico Minoru" qui a 50 points de vie, 100 points de mana, et 10 de force.
let firstPlayer = ["Nico Minoru", 50, 100, 10];

// 3) Créer une variable secondPlayer et stocker dedans le personnage "Spiderman" qui a 120 points de vie, 0 point de mana, et 50 de force.
let secondPlayer = ["Spiderman", 120, 0, 50];

// 4) Donner 25 points de vie supplémentaires au premier personnage.
firstPlayer[1] += 25;

// 5) Créer une fonction displayInfo qui reçoit un personnage en entrée et qui affiche dans la console un message à propos de ce personnage (cf en dessous de la fonction).
// Par exemple, 
displayInfo(firstPlayer);
// devra afficher :
// Nico Minoru a 50 points de vie, 100 points de mana et 10 points de force.
function displayInfo(player) {
	console.log(player[0] + " a " + player[1] + " points de vie, " + player[2] + " points de mana, " + player[3] + " points de force.")
}

// 6) Trouver l'erreur de français dans la fonction précédente (:innocent:) en la testant avec le second personnage.
// 0 point"S" de mana 

// 7) Corriger la fonction pour faire disparaître cette erreur.
function displayInfo(player) {
    let pts = [" point", " points"];
    console.log(
        player[0] + " a " + 
        player[1] + pts[player[1]<2 ? 0 : 1] + " de vie, " + 
        player[2] + pts[player[2]<2 ? 0 : 1] + " de mana, " + 
        player[3] + pts[player[3]<2 ? 0 : 1] + " de force.");
}

// https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2021/11/12201506/clean_259.jpg
// 8) Le deuxième personnage a perdu 3 de vie. Décrémenter la variable correspondante.
secondPlayer[1] -= 3;

// 9) Vérifier que
displayInfo(secondPlayer);
// affiche bien : "Spiderman a 117 points de vie, 0 point de mana, et 50 de force."

// 10) Écrire une fonction directHit qui reçoit deux personnages en entrée et qui fait perdre des points de vie au second. Le nombre de points de vie perdus sera égal à la force du premier personnage.
function directHit(player1, player2) {
	player2[1] -= player1[3];
    console.log(player1[0] + " met une patate de forrain à " + player2[0]);
    console.log(player2[0] + " perd " + player1[3] + " points de vie !");
}
directHit(firstPlayer, secondPlayer);

// 11) Utiliser la fonction précédente pour que le second personnage tape le premier personnage.
directHit(secondPlayer, firstPlayer);

// 12) Le second personnage boit une potion de soin ! Ajouter 3 points de vie à Spiderman.
secondPlayer[1] += 3;
console.log(secondPlayer[0] + " boit une potion et a désormais " + secondPlayer[1] + " points de vie");

// 13) Le premier personnage va boire plusieurs potions.
// TODO
let randomNumber = Math.floor(Math.random()*8)+2;
let healthBack = 3;
console.log(firstPlayer[0] + " s'apprête à boire",randomNumber,"potions de vie !");
console.log(secondPlayer[0] + " se croit dans un anime et le laisse faire en arborant un air dédaigneux")
for (let i = 0; i < randomNumber; i++) {
    firstPlayer[1] += healthBack;
    console.log(firstPlayer[0] + " à récupéré " + healthBack + " points de vie !");
}
displayInfo(firstPlayer);

// 14) Écrire une fonction qui reçoit deux personnages A et B en entrée et qui fait lancer un sort à A pour attaquer B
// Cette fonction doit :
// - vérifier que le personnage a au moins 10 points de mana ; si ce n'est pas le cas, la fonction est terminée
// - faire perdre 10 points de mana à A
// - faire perdre 25 points de vie à B
function castSpell(A, B) {
    if (A[2] > 10) {
        B[1] -= 25;
        console.log(A[0] + " utilise se jette à corps perdu dans la bataille et déclenche un sort d'écrasement sur " + B[0] + " !");
        console.log(B[0] + " n'a plus que " + B[1] + " points de vie");
    }
}
castSpell(firstPlayer, secondPlayer);
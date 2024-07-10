class Person {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    sePresenter() {
        return "Je m'appelle " + this.nom + " et j'ai " + this.age + " ans";
    }
}

const Julie = new Person("Julie", 19); 

Julie.sePresenter();

// Prototype 

class chien {
    constructor(nom, race) {
        this.nom = nom;
        this.race = race;
    }
}

chien.prototype.aboyer = function() {
    return "Woof ! Je suis " + this.nom + ", un " + this.race;
}

const Bill = new chien("Bill", "Teckel");

Bill.aboyer();

// Geometry - Rectangle

class Rectangle {
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
}

Rectangle.prototype.superficie = function() {
    return this.largeur * this.hauteur;
}
Rectangle.prototype.perimetre = function() {
    let total = this.largeur + this.hauteur;
    return total * 2;
}

const Rectangle1 = new Rectangle(15, 30);

Rectangle1.superficie(); //450
Rectangle1.perimetre(); //90

// Geometry - Cercle

class Cercle {
    constructor(rayon, couleur) {
        this.rayon = rayon;
        this.couleur = couleur;
    }
    calculerPerimetre(){
        return 2 * Math.PI * this.rayon;
    }
    calculerAire(){
       return this.rayon * this.rayon * Math.PI;
    }
}

const Cercle1 = new Cercle(15, "Bleu");

// Tuture

class Vehicule {
    constructor(modele, couleur, annee) {
        this.modele = modele;
        this.couleur = couleur;
        this.annee = annee;
    }
}

class Voiture extends Vehicule{
    constructor(modele, couleur, annee, marque) {
        super(modele, couleur, annee);
        this.marque = marque;
    }
}

// class Voiture extends Vehicule{};

// Voiture.prototype.marque = this.marque;

const Voiture1 = new Voiture("Logan", "Rouge", 2012, "Dacia");




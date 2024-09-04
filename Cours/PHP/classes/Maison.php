<?php 
    class Maison {
        public $nomMaison;
        public $longueurMaison;
        public $largeurMaison;
        public $nbrEtages;

        public function surface() {
            $surface = $this->longueurMaison * $this->largeurMaison;
            $result = $surface + ($surface * $this->nbrEtages);
            echo "<p>La surface de $this->nomMaison est égale à $result mètres carrés<br>";
            return;
        }
    }
?>
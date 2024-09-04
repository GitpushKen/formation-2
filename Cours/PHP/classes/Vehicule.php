<?php

    class Vehicule {
        public $nomVehicule;
        public $nbRoues;
        private $vitesse;

        public function getVitesse() {
            return $this->vitesse;
        }
        public function setVitesse($new_vitesse) {
            $this->vitesse = $new_vitesse;
        }

        public function detect() {
            if ($this->nbRoues > 2) {
                echo "C'est une voiture<br>";
            } else {
                echo "C'est une moto<br>";
            }
            return;
        }
        
        public function plusRapide($x) {
            if($this->vitesse > $x->vitesse) {
                echo "$this->nomVehicule est le plus rapide<br>";
            } else {
                echo "$x->nomVehicule est le plus rapide<br>";
            }
        }
    } 
?> 
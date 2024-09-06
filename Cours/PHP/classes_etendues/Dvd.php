<?php 
    class Dvd extends Multimedia {
        public $bonus;

        public function __construct($sAuteur, $sTitre, $iReference, $fDuree, $sBonus){
            parent::__construct($sAuteur, $sTitre, $iReference, $fDuree);
            $this->bonus = $sBonus;
        }

        public function getBonus() {
            return $this->bonus;
        }
    }
?>
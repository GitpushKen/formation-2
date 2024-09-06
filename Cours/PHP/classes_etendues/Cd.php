<?php 
    class Cd extends Multimedia {
        private $nbPlages;

        public function __construct($sAuteur, $sTitre, $iReference, $fDuree, $iNbPlages){
            parent::__construct($sAuteur, $sTitre, $iReference, $fDuree);
            $this->nbPlages = $iNbPlages;
        }

        public function getNbPlages() {
            return $this->nbPlages;
        }
    }
?>
<?php 
    class Multimedia extends Document {
        private $duree;

        public function __construct($sAuteur, $sTitre, $iReference, $fDuree){
            parent::__construct($sAuteur, $sTitre, $iReference);
            $this->duree = $fDuree;
        }

        public function getDuree() {
            return $this->duree;
        }
    }
    
?>
<?php 
    class Livre extends Document {
        private $nbPages;

        public function __construct($sAuteur, $sTitre, $iReference, $iNbPages){
            parent::__construct($sAuteur, $sTitre, $iReference);
            $this->nbPages = $iNbPages;
        }

        public function getNbPages() {
            return $this->nbPages;
        }
    }
    
?>
<?php 
    abstract class Document{
        private $auteur;
        private $titre;
        private $reference;

        public function __construct( $sAuteur, $sTitre, $iReference ){
            $this->auteur = $sAuteur;
            $this->titre = $sTitre;
            $this->reference = $iReference;
        }

        public function getAuteur() {
            return $this->auteur;
        }
        public function getTitre() {
            return $this->titre;
        }
        public function getRef() {
            return $this->reference;
        }
    }
?>
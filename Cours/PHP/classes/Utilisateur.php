<?php 
    class Utilisateur {
        
        private $id;
        private $nom;
        private $prenom;


        public function __construct( $sId, $sName, $sSurname ) {
            $this->id = $sId;
            $this->nom = $sName;
            $this->prenom = $sSurname;
            
        }
        public function getId() {
            return $this->id;
        }

        public function getName() {
            return $this->nom;
        }

        public function getSurname() {
            return $this->prenom;
        }


    }

?>
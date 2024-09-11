<?php

class Utilisateur
{
    private $insert;
    private $select;

    public function __construct($db)
    {
        $this->insert = $db->prepare("INSERT INTO utilisateurs(utilisateur_nom, utilisateur_prenom, utilisateur_pseudo, utilisateur_mdp) 
                                      VALUES(:utilisateur_nom, :utilisateur_prenom, :utilisateur_pseudo, :utilisateur_mdp);");
        $this->select = $db->prepare("SELECT * 
                                      FROM utilisateurs");
    }

    public function insert($sNom, $sPrenom, $sPseudo, $sMdp)
    {
        $r = true;
        $this->insert->execute(array(
            ":utilisateur_nom" => strtoupper($sNom),
            ":utilisateur_prenom" => ucfirst(strtolower($sPrenom)),
            ":utilisateur_pseudo" => $sPseudo,
            ":utilisateur_mdp" => $sMdp
        ));
        if ($this->insert->errorCode() != 0) {
            print_r($this->insert->errorInfo());
            $r = false;
        }
        return $r;
    }

    public function select()
    {
        $this->select->execute();
        if ($this->select->errorCode() != 0) {
            print_r($this->select->errorInfo());
        }
        return $this->select->fetchAll(PDO::FETCH_ASSOC);
    }
}

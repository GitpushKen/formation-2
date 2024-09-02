<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php
        $value = 5;
        $string = "Ken";
        $bool = false;

        echo $value," ";
        echo gettype($value)," ";

        echo $string," ";
        echo gettype($bool);
    ?><br>
    <?php
        $a = 12;
        $b = 10;
        $total = $a + $b;

        echo $total," ";
    ?><br>
    <?php
        $a = 5;
        $b = 3;
        $c = $a + $b;

        echo $a," ", $b," ", $c," ";
        $a = 2;
        echo $a," ";
        $c = $b - $a;
        echo $a," ", $b," ", $c," ";
    ?><br>
    <?php
        $a = 15;
        $b = 23;
        $c = $a;
        $a = $b;
        $b = $c;

        echo $a," ", $b," ";
    ?><br>
    <?php
        $prixHT = 15.99;
        $quantite = 154; 
        $TVA = 20;
        $prixTTC = $prixHT + ($prixHT * $TVA / 100);
        $prixTOTAL = $prixTTC * $quantite;

        echo "Prix hors taxe : ". $prixHT. ", nombre d'unités : ". $quantite. " , TVA : ". $TVA. " %, ". " ". "Total : ".$prixTOTAL;
    ?><br>
    <?php
        $a = "Bonjour";
        echo $a." ";

        $a = "Bon";
        $b = "jour";
        $c = 10;
        echo $a.$b." ".$c + 1;

        $a = "Bonjour";
        echo "<p>" . $a . " l'Adrar</p>";
    ?>
    <?php
        function substracter($a, $b) {
            return $a - $b;
        }

        echo substracter(10,5);
    ?><br>
    <?php     
        function rounder($c) {
            return round($c);
        }

        echo rounder(25.36);
    ?><br>
    <?php     
        function adder($a, $b, $c) {
            return $a + $b +$c;
        }

        echo adder(12,15,89);
    ?><br>
    <?php     
        function meder($a, $b, $c) {
            $med = $a + $b +$c ;
            return $med / 3 ;
            // ou ($a + $b + $c)/3
        }

        echo meder(12,15,89);
    ?><br>
    <?php     
        function isPositive($a) {
            if ($a > 0) {
                return "Positif";
            } else {
                return "Negatif";
            }
            
        }

        echo isPositive(-17);
    ?>



</body>
</html>
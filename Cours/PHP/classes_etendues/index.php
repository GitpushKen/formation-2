<?php 
    include("./Document.php");
    include("./Multimedia.php");
    include("./Livre.php");
    include("./Cd.php");
    include("./Dvd.php");


    $livre = new Livre("tolkien", "SDA", 00000 ,850);
    $cd = new Cd("Wasting Shit", "24", 00665, 32.25, 1);
    $dvd = new Dvd("tolkien", "SDA", 00000 ,3.45,"Making Of");
    var_dump($livre);
    var_dump($dvd);
    var_dump($cd);
?> 
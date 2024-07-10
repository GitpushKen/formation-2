/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/
function syracuse(n) {
    if (n%2 != 0) {
        return  n * 3 + 1;
    } else {
        return n/2;
    }
}

/*
Écrire une fonction countdown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countdown(3)` devra afficher
3
2
1
0
*/
function countdown(c) {
    let number = c;
    while (number >= 0) {
        console.log(number);
        number -= 1;
    }
}

/*
Écrire une fonction fastCountdown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountdown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/
function fastCountdown(c) {
    let number = c;
    while (number > 0.1) {
        console.log(number);
        number = number / 2;
    }
}

/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/
function evenNumbers(x, y) {
    let number1 = x; 
    let number2 = y;
    if (number1 < number2) {
        while (number1 < number2) {
            if (number1%2 == 0) {
                console.log(number1);
                number1 += 2;
            } else {
                number1 += 1;
            }
        }
    } else {
        while (number2 < number1) {
            if (number2%2 == 0) {
                console.log(number2);
                number2 += 2;
            } else {
                number2 += 1;
            }
        }
    }
}



function evenNumbers2(x, y) {
    if(x > y) {
        evenNumbers2(y, x); // On inverse l'ordre si jamais x est plus grand que y, histoire qu'on ait qu'un seul sens à coder, grâce à ça on aura uniquement le cas ou Y est plus grand que X
        return; // 
    }
    let n1 = x;
    let n2 = y;
    while (n1 < n2) { // Du coup, vu que Y est forcément plus grand que X, on a besoin que d'un seul while, celui de X inférieur à Y
        if (n1%2 == 0) { // Si n1 est pair, il s'affiche et s'incrémente de 2
            console.log(n1);
             n1 += 2;
        } else { // Sinon, il s'incrémente de 1, devient pair et la boucle repart
             n1 += 1;
        }
    }
}

evenNumbers2(7, 78);
/*
Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction.
*/
function euclide(a, b) {
    if (b == 0) {
        return a;
    } else {
        return euclide(b, a%b)
    }
}
/*
À la main, calculer `euclide(6,10)`.
*/



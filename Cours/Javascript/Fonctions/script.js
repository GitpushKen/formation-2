// Simple + arguments

const bonjour = (user) => `Bonjour monde et ${user}`;

// return value

function square(n) {
    return n * n;
}

// Anonyme

const double = (n) => n * 2;

// Nested

let protagonist2 = {
    characters : ["Caim", "Angelus", "Manah", "Seere", "Inuart", "Verdelet", "Arioch", "Leonard"],
    func : function reverse() {
        return this.characters.reverse();
    }
}
console.log(protagonist2.func());

// Recursive





//

let total = 0;
function recursio(n) {
    if (n > 0) {
        total += n;
        n -= 1;
        return recursio(n);
    }
    return total;
}

// Default

function defaultCase(n = 1){
    return n * n;
}

// Optional

function optionalSquare(n){
    if (n != null) {
        return n * n;
    } else {
        return square(5);
    }
}

// Nominated 

function nominatedSquare(number){
    return number * number;
}
nominatedSquare()

let p = 0;
let p2 = 0;
let total = 0;

for (i = 0; i < 50; i++) {
    p++;
    p2 = p * p; 
    console.log(p);
    console.log(p2);
    if (p2%3==0) {
        console.log(p2);
        total += p2;
    }
}

console.log(total);

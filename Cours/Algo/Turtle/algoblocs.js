

/*

// A1
// Initialisation
setPos(300,300);
faceDown();
changeColor(color.red);
// Réalisation
forward(200);
faceRight();
forward(100);


// A2
// Initialisation
setPos(300,300);
faceLeft();
changeColor(color.yellow);
// Réalisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);


// A3
// Initialisation
setPos(300,300);
faceLeft();
changeColor(color.orange);
// Réalisation
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);


// A4
// Initialisation
setPos(300,300);
faceRight();
changeColor(color.green);
// Réalisation
forward(200);
arcLeft(100);
arcLeft(100);
forward(100);
arcRight(100);
arcRight(100);
forward(200);


// A5
// Initialisation
setPos(300,300);
faceRight();
changeColor(color.purple);
// Réalisation
arcRight(200);
arcRight(100);
arcLeft(100);
arcLeft(200);


// A6
// Initialisation
setPos(300,300);
faceUp();
changeColor(color.aqua);
// Réalisation
forward(100);
up();
forward(100);
down();
forward(200);



// A7
// Initialisation
setPos(300,300);
faceDown();
changeColor(color.green);
// Réalisation
forward(200);
arcLeft(100)
forward(100)
up();
forward(100);
down();
forward(200);
arcLeft(100);
forward(100);


// A8
// Initialisation
setPos(300,300);
faceUp();
changeColor(color.fuchsia);
// Réalisation
forward(100);
faceRight();
forward(200)
faceDown();
forward(400);
faceLeft();
forward(100);
up();
forward(100);
faceUp();
forward(100);
down();
forward(100);


// A9
// Initialisation
setPos(100,450);
faceRight();
changeColor(color.aqua);
// Réalisation
arcLeft(100,180);
arcRight(100,180);
forward(400);
arcRight(100,180);
arcLeft(100,180);
faceLeft();
forward(400);


// A10
// Initialisation
setPos(300,300);
faceRight();
changeColor(color.red);
// Réalisation
arcLeft(100,180);
changeColor(color.green)
arcLeft(200,180);
changeColor(color.yellow)
arcLeft(400,180);


// A11
// Initialisation
setPos(60,200);
faceUp();
changeColor(color.blue);
// Réalisation
arcRight(100,180);
faceRight();
up();
forward(100);
down();
faceUp();
arcRight(100,180);
up();
forward(100);
faceLeft();
forward(50);
faceDown();
down();
changeColor(color.fuchsia)
arcRight(200,180);



// A12
// Initialisation
setPos(10,260);
faceUp();
changeColor(color.green);
// Réalisation
arcRight(50,180);
forward(100);
arcLeft(50,180);
up();
faceRight();
forward(50);
down();
faceDown();
changeColor(color.orange);
arcLeft(50,180);
forward(100);
arcRight(50,180);



// B1
// Initialisation 
setPos(150,150);
faceRight();
changeColor(color.green);
// Réalisation
for (let i = 0 ; i < 4; i++) {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}


// B2
// Initialisation 
setPos(20,300);
faceUp();
changeColor(color.red);
setLineWidth(10);
// Réalisation
for (let i = 0; i < 4; i++) {
    forward(100);
    faceRight();
    forward(100);
    faceDown();
    forward(100);
    faceRight();
    forward(100);
    faceUp();
}


// B3 
// Initialisation
setPos(220,220);
faceRight();
changeColor(color.violet);
setLineWidth(10);
// Réalisation 
for (let i = 0; i < 4; i++) {
    forward(200);
    right(90)
}


// B4 
// Initialisation 
setPos(200,300);
faceRight();
changeColor(color.aqua);
setLineWidth(10);
// Réalisation 
for (let i = 0; i < 3; i++) {
    forward(100);
    left(120);
}


// B5
// Initialisation 
setPos(300,400);
faceUp();
changeColor(color.orange);
setLineWidth(10);
// Réalisation
forward(200);
changeColor(color.red);
for (let i = 0; i < 3; i++) {
    forward(100);
    right(120);
}


// B6 
// Initialisation 
setPos(100,320);
faceRight();
setLineWidth(10);
changeColor(color.red);
// Réalisation 
for (let i = 0; i < 2; i++) {
    forward(100);
    faceUp();
    forward(100);
    faceRight();
}
changeColor(color.green);
for (let i = 0; i < 3; i++) {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}



// B7 
// Initialisation 
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.orange);
// Réalisation 
for (let i = 0; i < 4; i++) {
    forward(200);
    right(90);
}
for (let i = 0; i < 3; i++) {
    forward(200);
    left(120);
}


// C2
// Initialisation
setPos(270,580);
faceUp();
changeColor(color.violet);
setLineWidth(10);
// Réalisation
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}


// C3
// Initialisation 
setPos(20,310);
faceRight();
shiftColor(0.4);
setLineWidth(10);
// Réalisation
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 8; j++) {
        forward(100);
        left(135);
    }
    up();
    forward(200);
    shiftColor(0.1);
    down();
}


// C4
// Initialisation
setPos(20,300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        forward(50);
        left(120);
    }
    changeColor(color.orange)
    for (let j = 0; j < 4; j++) {
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
    changeColor(color.red);
}


// D10
// Initialisation
setPos(300,300);
faceRight();
changeColor(color.yellow);
setLineWidth(10);
let length = 100;
// Réalisation
for (let i = 0; i < 10; i++) {
    forward(length);
    right(90);
    length += 50;
}


// D11 
// Initialisation
setPos(10,300);
faceRight();
setLineWidth(10);
changeColor(color.white);
let length = 125;
// Réalisation
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        forward(length);
        left(120);
    }
    forward(length);
    length -= 25;
}


// D12
// Initialisation
setPos(300,320);
faceRight();
setLineWidth(10);
changeColor(color.aqua);
let length = 100;
// Réalisation
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
        forward(length);
        left(120);
    }
    forward(length);
    left(60);
    length += 50;
}


// D13
// Initialisation
setPos(270,300);
faceRight();
setLineWidth(10);
changeColor(color.fuchsia);
let radius = 50;
// Réalisation
for (let i = 0; i < 8; i++) {
    arcRight(radius,180);
    up();
    forward(50);
    down();
    radius += 25;
}


// D14
// Initialisation
setPos(20,300);
faceUp();
right(45);
setLineWidth(10);
changeColor(color.green);
let length = 25;
// Réalisation
for (let i= 0; i < 2; i++) {
    for (let i = 0; i < 4; i++) {
        forward(length);
        right(90);
        forward(length);
        left(90);
        length += 25;
    }
    right(180);
    length -= 100;
}
*/

// D15
// Initialisation
setPos(300,300);
faceDown();
changeColor(color.red);
setLineWidth(10);

// Réalisation





/*

// Audace du débutant 2
// Initialisation 
setPos(300,300);
faceUp();
setLineWidth(5);
shiftColor(0);
// Réalisation 
for (let i = 0; i < 360; i++) {
    forward(100);
    backward(100);
    left(1);
    shiftColor(1/360);
}



// Audace du débutant 3
// Initialisation 
setPos(300,300);
faceUp();
shiftColor(0);
// Réalisation 
for (let i = 0; i < 200; i++) {
    forward(50);
    backward(50);
    faceRight();
    up();
    forward(1);
    down();
    shiftColor(1/200);
    faceUp();
}



// Audace du débutant 4
// Initialisation
setPos(300,300);
faceRight();
shiftGrey(1);
// Réalisation
for (let i = 0; i < 1000; i++) {
    arcLeft(Math.random()*50, Math.random()*360);
    forward(Math.random()*50);
    arcRight(Math.random()*50, Math.random()*360);
    shiftGrey(1/100);
}

*/
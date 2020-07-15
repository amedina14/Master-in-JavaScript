'use strict'

//Bucle While

var year = 2020;

while (year >= 1991) {
    // esegue questo
    console.log("Estamos en el año: " + year);

    // BREAK
    if (year == 1995) {
        break;
    }

    year--;
}

// Do while

var age = 30;

do {
    alert("only age major than 25");
    age -= 1;
} while (age > 25)

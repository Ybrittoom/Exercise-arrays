let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

if ( Numeros.length >= 1) {
    console.log('deu certo')
} else {
    console.log('deu errado')
}


let n = 0

if ( Numeros.length >= n) {
    while ( Numeros.length >= n) {
        console.log('deu certoo')
        n++;
    }
} else {
    console.log('deu erradoo')
}

n = 1

if ( Numeros.length >= n) {
    while ( Numeros.length >= n) {
        Numeros.shift();
    }
    console.log(Numeros)
    console.log('funcionouu')
} else {
    console.log('deu erradoo')
}
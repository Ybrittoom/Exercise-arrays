let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerosPares = Numeros.filter(num => num % 2 === 0 )
console.log(numerosPares)

/*filter funciona como um filtro de café.
 Ele filtra uma array e retorna uma lista apenas com os itens que atendem aos requisitos que você definiu. 
 Ele recebe como parâmetro uma função callback, e o retorno dessa função define se o item fará parte da nova array ( true ) ou não ( false ).*/
//tipos de comparações e dados
const num1 = 456
const num2 = "456"

console.log(num1 == num2) //dois sinais de igualdade comparam o conteudo retornando true nesse caso

console.log(num1 === num2)// três sinais de igualdade comparam o tipo e o conteudo retornando false nesse caso

console.log(Number(num1) === Number(num2)) // o codigo Number() serve para transformar a variavel que é colocada entre as aspas em um variavel de tipo numero portanto ao usar os '===' ele retorna true

console.log(String(num1) === String(num2))// o String()faz a mesma coisa mas trocando o tipo da variavel para uma string retornando true novamente
const objetoPessoa = {
    nome: 'Ándre',
    idade: 89,
    cpf: `333987476908`,
    status: 'morto'
}

console.log(`O nome do referente era: ${objetoPessoa.nome}; 
Sua idade consta: ${objetoPessoa.idade}; 
Os quatro ultimos digitos do seu cpf são: ${objetoPessoa.cpf.substring(8,)};
Seu status consta como: ${objetoPessoa.status}.`)

//autores: Lucas e isabel
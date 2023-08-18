const objetoPessoa = {
    nome: 'Ándre',
    idade: 89,
    cpf: `333987476908`,
    status: 'morto'
}
const chaves = [`nome`,'idade','cpf','status']

chaves.forEach((chave) => {
    console.log(`a chave ${chave} tem valor: ${objetoPessoa[chave]}`)
})
//autor:Lucas

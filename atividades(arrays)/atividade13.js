const filmes = ['vingadores','guerra-infinita','ultimato']
const lancamento = [2012,2018,2019]

const resultado =filmes.filter ((filme,indice) => {
return lancamento[indice] ===2012
})
console.log(`o filme lançado em 2012 foi ${resultado}`)

const resultado1 =filmes.filter ((filme,indice) => {
    return lancamento[indice] ===2018
    })
    console.log(`o filme lançado em 2018 foi ${resultado1}`)

    const resultado2 =filmes.filter ((filme,indice) => {
        return lancamento[indice] ===2019
        })
        console.log(`o filme lançado em 2019 foi ${resultado2}`)
const jogo = ['lol','angrybirds','call of duty']
const lancamento = [2009,2006,2010]
const preco = [0,15,20]
let frase

const playstore = [["lol ",2009,0],["angrybirds ",2006,15],["call of Duty ", 2010,20]]

for(i = 0; i < jogo.length;i++){
    frase = `àpp: ${playstore[i]}`
    console.log(frase)
}


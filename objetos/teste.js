/* pra garantir que eu aprendi mesmo
autora:isabel*/

const sup ={
    nome: 'sona',
    role: 'suporte',
    gold: 10000,
    itens: function (diero) {
        if (this.gold < diero){
            console.error(`Não pode ainda, quem pena! Falta ${(this.gold - diero) * (-1)}`)
        } else {
            this.gold -= diero
            console.log(`WP, seu gold atual é ${this.gold}!`)
        }
    }
}
sup.itens(2500+3000+1000+8000)